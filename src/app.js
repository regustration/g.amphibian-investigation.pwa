import './registerSW'
import './components/investigation-list'
import './components/warning-toast'
import parseTextSandi from './utils/counting-sandi-style'
import parseTextGus from './utils/counting-gus-style'

$(() => {
  const $rawText = $('#raw-text')
  const $res = $('investigation-list')[0]
  $('button').click(e => {
    e.preventDefault()

    let message = []
    const parseText = $('#counting-mode-1').is(':checked')
      ? parseTextSandi : parseTextGus
    try {
      $res.result = parseText($.trim($rawText.val()), message)
    } catch (e) {
      console.warn(e)
      $res.result = []
    } finally {
      $('warning-toast')[0].input = message
      message = []
    }
  })
})
