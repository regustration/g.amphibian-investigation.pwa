import './registerSW'
import './components/investigation-list'
import './components/warning-toast'
import parseText from './utils/counting-sandi-style'

$(() => {
  const $rawText = $('#raw-text')
  const $res = $('investigation-list')[0]
  $('button').click(e => {
    e.preventDefault()

    let message = []
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
