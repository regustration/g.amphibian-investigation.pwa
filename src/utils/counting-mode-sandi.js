export function parseRecordDetail (str) {
  const items = str.trim().split(',')
  if (items.length < 1) {
    console.warn('empty line!');
    return null
  }
  // 物種, 型態+聽音, 數量, 行為, 棲地, 備註
  const [species, form, count, behavior, habitat, note] = items.map(e => (e || '').trim())

  // 需要確認一下，上傳用的跟書寫用的id是否確認相同
  const bArr = BEHAVIORS.find(b => b[0].find(id => id === behavior))
  if (!bArr) {
    console.warn('看不懂這個行為代號');
    return null
  }

  let action = { id: bArr[0], name: bArr[1][0] }
  return [{ species, form, count, action, habitat, note }]
}
