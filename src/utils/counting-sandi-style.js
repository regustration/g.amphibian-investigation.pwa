import { SPECIES, SPECIES_ABBRS } from '../config/species'
import { HABITATS } from '../config/habitats'
import { BEHAVIORS } from '../config/behaviors'
import { pushSpeciesRecord, pushRecord, addSeeCount } from './utils'

function parseRecordDetail (str) {
  const items = str.trim().split('.')
  if (items.length < 1) {
    console.warn('empty line!');
    return null
  }
  // 物種, 型態+聽音, 數量, 行為, 棲地, 備註
  let [form, habitat, count, behavior, note] = items.map(e => (e || '').trim())

  form = ['', '卵', '蝌蚪', '幼', '公', '母', '成', '鳴'][form]
  count = Number(count)
  switch (behavior) {
    case '目3':
      behavior = '3'
      break
    case '3':
      form = '鳴'
      break
    case undefined:
      behavior = 9
      break
    default:
      break
  }

  /** 行為 */
  // 需要確認一下，上傳用的跟書寫用的id是否確認相同
  const bArr = BEHAVIORS.find(b => b[0] === Number(behavior) - 1)

  if (!bArr) {
    console.warn('看不懂這個行為代號');
    return null
  }

  let action = { id: bArr[0], name: bArr[1][0] }

  /** 棲地 */
  HABITATS.find(type =>
    type[2].find(detail => {
      if (detail[1] === Number(habitat)) {
        habitat = {
          type: type[1],
          typeId: type[0],
          detail: detail[2],
          detailId: detail[0]
        }
        return true
      }
    })
  )

  if (!habitat.detailId) {
    console.warn('看不懂這個棲地代號');
    return null
  }

  return [habitat, [{ form, count, action, note }]]
}

export default function parseText (str, message = []) {
  const res = []
  let tempSpecies = ''
  let tempRecords = []

  str.split(/\r?\n/).forEach((s, line) => {
    s = s.trim()
    if (!s) {
      console.log(`line ${line + 1} is an empty line.`)
      return
    }
    let startPos = 0
    let strPos = 0
    let parts = s.split(/\s/)
    parts.forEach((p, i) => {
      if (!p) {
        strPos += 1
        // 文字紀錄開頭可以空幾行再開始
        if (i === startPos) startPos += 1
        return
      }
      let isSpeciesPart = SPECIES_ABBRS.indexOf(p) >= 0
      if (i === startPos && line === 0 && !isSpeciesPart) {
        message.push(`Should started with a species name.`)
        throw new Error(`Should started with a species name.`)
      }

      // 物種名稱
      if (isSpeciesPart) {
        // 推送物種資料並且重置動作棲地資料
        if (tempRecords.length) {
          pushSpeciesRecord(tempSpecies, tempRecords, res)

          tempSpecies = null
          tempRecords = []
        }
        SPECIES.find(f => f[1].find(g => g[1].find(s => s[2].find(abbr => {
          if (abbr === p) {
            tempSpecies = {
              family: f[0],
              genus: g[0],
              species: s[0],
              abbr: s[2][0],
              id: s[1]
            }
            return true
          }
        }))))

        if (!tempSpecies) {
          message.push(`${line + 1}:${strPos} is an undefined species: ${p}.`)
          throw new Error(`${line + 1}:${strPos} is an undefined species: ${p}.`)
        }

      // 資料棲地
      } else {
        const detail = parseRecordDetail(p)
        if (detail) {
          pushRecord(tempRecords, [detail])
        } else {
          message.push(`${line + 1}:${strPos} is an undefined data: ${p}`)
          console.warn(`${line + 1}:${strPos} is an undefined data: ${p}`)
        }
      }
      strPos += (p.length + 1)
    })
  })
  // 最後一筆資料推送
  if (tempRecords.length) {
    pushSpeciesRecord(tempSpecies, tempRecords, res)
    tempRecords = []
  }

  // 整合資料
  let see = {
    froglet: 0,
    male: 0,
    female: 0,
    grown: 0
  }
  res.see = Object.assign({}, see)
  res.hear = 0
  res.forEach(species => {
    species.records.sort((a, b) =>
      a[0].typeId - b[0].typeId ||
      a[0].detailId - b[0].detailId
    )
    const spSee = Object.assign({}, see)
    let spHear = 0
    species.records.forEach(record => {
      record[1].forEach(detail => {
        const { form, count } = detail
        switch (form) {
          case '幼':
            spSee.froglet += count
            break
          case '公':
            spSee.male += count
            break
          case '母':
            spSee.female += count
            break
          case '成':
            spSee.grown += count
            break
          case '鳴':
            spHear += count
            break
          default:
            break
        }
      })
    })
    species.summary = {
      see: spSee,
      hear: spHear
    }
    res.hear += spHear
    addSeeCount(res.see, spSee)
  })

  console.log(res)
  return res.sort((a, b) => {
    const { species: sa } = a
    const { species: sb } = b
    return `${sa.family} ${sa.genus} ${sa.species}`.localeCompare(`${sb.family} ${sb.genus} ${sb.species}`)
  })
}
