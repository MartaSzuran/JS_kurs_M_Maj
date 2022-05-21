const btnSizeUp = document.querySelector('.sizeUp')
const btnSizeDown = document.querySelector('.sizeDown')
const btnColor = document.querySelector('.color')
const p = document.querySelector('p')

let fSize = 36


const sizeUp = () => {
  fSize += 1
  if (fSize >= 60) {
    fSize = 60
  } 
  return p.style.fontSize = fSize  + 'px'
}

const sizeDown = () => {
  fSize -= 1
  if (fSize <= 10) {
    fSize = 10
  }
  return p.style.fontSize = fSize  + 'px'
}

const changeColor = () => {
  const r = Math.floor(Math.random() * 255)
  console.log
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  p.style.color = `rgb(${r},${g},${b})`
}

btnColor.addEventListener('click', changeColor)
btnSizeUp.addEventListener('click', sizeUp)
btnSizeDown.addEventListener('click', sizeDown)