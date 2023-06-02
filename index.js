const lengthConv = 3.281
const volumeConv = 0.264
const massConv = 2.204

const convBtnEl = document.getElementById('conversion-btn')
const lengthEl = document.getElementById('length-container')
const volumeEl = document.getElementById('volume-container')
const massEl = document.getElementById('mass-container')
const metricStr = ''
const impericalStr = ''

convBtnEl.addEventListener('click', () => {
  resetText()
  const inputNum = document.getElementById('number-to-convert').value
  const numToConvert = Number(inputNum)
  conversionCalc(lengthEl, numToConvert, lengthConv, 'meters', 'feet')
  conversionCalc(volumeEl, numToConvert, volumeConv, 'liters', 'gallons')
  conversionCalc(massEl, numToConvert, massConv, 'kilograms', 'pounds')
})

const conversionCalc = (element, number, conversionNum, metricStr, impericalStr) => {
  let convertedNum1 = number * conversionNum
  let convertedNum2 = number / conversionNum
  createText(element, number, convertedNum1, convertedNum2, metricStr, impericalStr)
}
const createText = (el, number, convertedNum1, convertedNum2, metricStr, impericalStr) => {
  el.innerHTML += `
  <p class="converted-output">
  ${number} ${metricStr} = ${convertedNum1.toFixed(
    3,
  )} ${impericalStr} | ${number} ${impericalStr} = ${convertedNum2.toFixed(
    3,
  )} ${metricStr}
</p> 
  `
}

const resetText = () => {
  let lengthParagraphEl = document.querySelector('#length-container p')
  let volumeParagraphEl = document.querySelector('#volume-container p')
  let massParagraphEl = document.querySelector('#mass-container p')
  if (lengthParagraphEl || volumeParagraphEl || massParagraphEl) {
    lengthParagraphEl.remove()
    volumeParagraphEl.remove()
    massParagraphEl.remove()
  }
}
