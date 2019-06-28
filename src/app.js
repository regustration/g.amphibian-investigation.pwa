import './registerSW'
import './components/investigation-list'
import './components/style-instructor'
import './components/warning-toast'
import parseTextSandi from './utils/counting-sandi-style'
import parseTextGus from './utils/counting-gus-style'
require('./styles/main.styl')

$(() => {
  const $rawText = document.getElementById('raw-text')
  const $res = document.querySelector('investigation-list')
  const $styleInstructor = document.querySelector('style-instructor')
  let countingStyle = 'sandi'

  document.querySelectorAll('input[name="counting-style"]').forEach(el =>
    el.addEventListener('change', e => {
      countingStyle = e.target.value
      $styleInstructor.countingStyle = countingStyle
    }, false)
  )
  document.getElementById('btn-translate').addEventListener('click', e => {
    e.preventDefault()

    let message = []
    const parseText = countingStyle === 'sandi'
      ? parseTextSandi : parseTextGus
    try {
      $res.result = parseText(($rawText.value || '').trim(), message)
      console.log($res.result)
    } catch (e) {
      console.warn(e)
      $res.result = []
    } finally {
      $('warning-toast')[0].input = message
      message = []
      $('investigation-list')[0].copytime = ''
    }
  }, false)
})
