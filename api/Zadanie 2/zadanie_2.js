const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const div = document.querySelector('.square')

// wyloguje w konsoli napis 'czesc'
const hi = () => console.log('Czesc')

function changeColorRed() {
  div.style.fontSize = '50px'
}

function changeColorBlue() {
  div.style.fontSize = '25px'
}

function toggleClass() {
  p1.classList.toggle('show')
  p2.classList.toggle('show')

  // if(p1.classList.contains('show')) {
  //   p1.classList.remove('show')
  //   p1.classList.add('show')
  // } else {
  //   p2.classList.remove('show')
  //   p1.classList.add('show')
  // }
}

btn1.addEventListener('dblclick', hi)
div.addEventListener('mouseenter', changeColorRed)
div.addEventListener('mouseleave', changeColorBlue)
btn2.addEventListener('click', toggleClass)



