import { BEHAVIORS } from '../config/behaviors'

// {型態}{數量}{行為}:{備註}
const recordDetailReg = new RegExp(`(抱接|鳴|幼|公|母|成|蝌蚪|卵\\S?)(\\d+)?(\\S+)?(:\\S+)?`)

export function parseRecordDetail (str) {
  const m = str.match(recordDetailReg)

  if (!m) {
    console.warn('看不懂：' + str)
    return null
  }

  if (m[1] === '蝌蚪' || m[1][0] === '卵') {
    return [{ form: m[1] }]
  }

  const count = Number(m[2])
  if (m[1] === '抱接') {
    return [
      {
        form: '公',
        count,
        action: { id: 5, name: '配對' }
      }, {
        form: '母',
        count,
        action: { id: 5, name: '配對' }
      }
    ]
  } else {
    let action = m[3]
    if (action) {
      let bArr
      if (action[0] === '#') {
        const behaviorId = Number(action.substring(1)) - 1
        bArr = BEHAVIORS.find(b => b[0] === behaviorId)
      } else {
        bArr = BEHAVIORS.find(b => b[1].find(abbr => abbr === action))
      }
      if (bArr) {
        action = { id: bArr[0], name: bArr[1][0] }
      } else {
        console.warn('找不到行為')
        return null
      }
    } else {
      action = { id: 8, name: '單獨' }
    }

    return [{
      form: m[1],
      count,
      action
    }]
  }
}

export function pushSpeciesRecord (species, records, finalRecords) {
  if (species && records.length) {
    // duplicated species data
    const dupSpecies = finalRecords.find(r => {
      const { genus: g, species: s } = r.species
      const { genus: gt, species: st } = species
      return `${g} ${s}` === `${gt} ${st}`
    })
    if (dupSpecies) {
      pushRecord(dupSpecies.records, records)
    } else {
      finalRecords.push({
        species,
        records
      })
    }
  }
}

export function pushRecord (records, newRecords) {
  newRecords.forEach(record => {
    // 尋找重複的棲地
    const recordByHabitat = records.find(r => r[0].detailId === record[0].detailId)
    if (recordByHabitat) {
      pushDetail(recordByHabitat[1], record[1])
    } else {
      records.push(record)
    }
  })
}

export function pushDetail (details, newDetails) {
  newDetails.forEach(newDetail => {
    const dupDetail = details.find(d =>
      d.form === newDetail.form && d.action.id === newDetail.action.id
    )
    console.log({newDetail, details, dupDetail})
    if (dupDetail) {
      if (typeof dupDetail.count === 'number') {
        dupDetail.count += newDetail.count
      }
    } else {
      details.push(newDetail)
    }
  })
}

export function addSeeCount (seeObj, newSeeObj) {
  seeObj.froglet += newSeeObj.froglet
  seeObj.male += newSeeObj.male
  seeObj.female += newSeeObj.female
  seeObj.grown += newSeeObj.grown
}
