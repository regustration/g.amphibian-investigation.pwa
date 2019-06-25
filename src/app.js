import './registerSW'
import './components/investigation-list'
import './components/style-instructor'
import './components/warning-toast'
import parseTextSandi from './utils/counting-sandi-style'
import parseTextGus from './utils/counting-gus-style'

$(() => {
  const $rawText = $('#raw-text')
  const $res = $('investigation-list')[0]
  const $styleInstructor = $('style-instructor')[0]
  let countingStyle = 'sandi'

  $('input[name="counting-style"]').change(e => {
    countingStyle = e.target.value
    $styleInstructor.countingStyle = countingStyle
  })
  $('button').click(e => {
    e.preventDefault()

    let message = []
    const parseText = countingStyle === 'sandi'
      ? parseTextSandi : parseTextGus
    try {
      $res.result = parseText($.trim($rawText.val()), message)
      console.log($res.result)
    } catch (e) {
      console.warn(e)
      $res.result = []
    } finally {
      $('warning-toast')[0].input = message
      message = []
      $('investigation-list')[0].copytime = ''
    }
  })
})
