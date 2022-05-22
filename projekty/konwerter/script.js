const btnConvert = document.querySelector('.conv')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')
const pResult = document.querySelector('.result')
const number = document.querySelector('#converter')
const span1 = document.querySelector('.one')
const span2 = document.querySelector('.two')
const numbers = /[0-9]/i


const swap = () => {
  if (span1.textContent === '°C') {
    span1.textContent = '°F'
    span2.textContent = '°C'
    pResult.textContent = ''
  } else {
    span1.textContent = '°C'
    span2.textContent = '°F'
    pResult.textContent = ''
  }
}

const reset = () => {
  pResult.textContent = ''
  number.value= ''
}

const celToFar = () => {
  far = 32 + 9/5*number.value
  pResult.textContent = `${number.value}°C = ${far.toFixed(1)}°F`
  number.value= ''
}

const farToCel = () => {
  cel = 5/9 * (number.value - 32)
  pResult.textContent = `${number.value}°F = ${cel.toFixed(1)}°C`
  number.value= ''
}

const convert = () => {
  if (!number.value.match(numbers)) {
    pResult.textContent = 'Wprowadz temperaturę'
  } else if (span1.textContent === '°F') {  
    farToCel() 
  } else {
    celToFar()
  }
}

btnConvert.addEventListener('click', convert)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', swap)
