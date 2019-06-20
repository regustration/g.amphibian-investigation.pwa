import { BEHAVIORS } from '../config/behaviors'

export function parseRecordDetail (str) {
  const items = str.trim().split('.')
  if (items.length < 1) {
    console.warn('empty line!');
    return null
  }
  // 物種, 型態+聽音, 數量, 行為, 棲地, 備註
  let [form, habitat, count, behavior, note] = items.map(e => (e || '').trim())

  switch (behavior) {
    case '目3':
      behavior = '3'
      break
    case '3':
      form = '鳴'
      break
    default:
      break
  }

  // 需要確認一下，上傳用的跟書寫用的id是否確認相同
  const bArr = BEHAVIORS.find(b => b[0] === Number(behavior) - 1)

  if (!bArr) {
    console.warn('看不懂這個行為代號');
    return null
  }

  let action = { id: bArr[0], name: bArr[1][0] }
  console.log( [{ form, count, action, habitat, note }])
  return [{ form, count, action, habitat, note }]
}
