// const ulList = document.createElement('ul');
// const liItem = document.createElement('li');

// liItem.textContent = 'cześć';
// console.log(liItem)

// console.log(document.body)

// document.body.appendChild(ulList)

// ulList.appendChild(liItem)

// const myDiv = document.querySelector('div')
// const para = document.createElement('p')
// const headingTwo = document.createElement('h2')
// para.textContent = 'joł joł to ja Twój paragraf'

// // myDiv.appendChild(para)

// // myDiv.appendChild(para)
// // myDiv.appendChild(headingTwo)

// myDiv.append(para, headingTwo, 'cześć')


//--------------------------
//textcontent, innerhtml

// const btn = document.querySelector('button')
// console.log(btn);

// // // btn.outerHTML = '123'

// // btn.innerHTML = '<li>123</li>'

// // document.body.innerHTML = ''

// console.log(btn.innerText)
// console.log(btn.textContent)

// btn.textContent = '<li>123</li>'
// // btn.innerText = 'abcd!'

// const innerT = document.querySelector('.inner-text')
// const textC = document.querySelector('.text-content')
// console.log(innerT.innerText)
// console.log(innerT.textContent)
// console.log(textC.textContent)


// usuwanie elementów

// const div = document.querySelector('div')
// const p = document.querySelector('p')

// // removeChild
// // div.removeChild(p)

// // remove
// p.remove()
// div.remove()

/////////////
// addEventListener

// const btn1 = document.querySelector('.btn-1')
// const btn2 = document.querySelector('.btn-2')
// const btn3 = document.querySelector('.btn-3')

// // btn1.addEventListener('click', function () {
// //   console.log('klikniteo mnie')
// // })

// // btn2.addEventListener('mouseover', () => console.log('najechano na mnie'))

// const test = () => {
//   console.log('double click');
// }


// // // btn3.addEventListener('click', test)
// // btn3.addEventListener('dblclick', test)

// const btns = document.querySelectorAll('button')
// console.log(btns)


// btns.forEach(btn => btn.addEventListener('click', test))

////////
// addEventListener c.d.
// const btn = document.querySelector('button')

// const test = (e) => {
//   console.log(e)
//   // console.log(e.target)
//   // console.log(e.target.classList)
//   // console.log(e.target.offsetTop)
// }

// btn.addEventListener('click', test)

// delegacje zdarzeń

// const allCircles = document.querySelectorAll('.circle')
// const gold = document.querySelector('.gold')
// const lime = document.querySelector('.lime')

// allCircles.forEach(circle => circle.addEventListener('click', () => console.log(circle)))

// const newDiv = document.createElement('div')
// newDiv.classList.add('circle', 'purple')
// gold.appendChild(newDiv)

// console.log(allCircles.length) 

// lime.addEventListener('click', (e) => {
//   if(e.target.matches('.circle2')) {    
//   console.log('test')}
// })

// lime.addEventListener('click', (e) => {
//   if(e.target.classList.contains('circle2')) {    
//   console.log('test')}
// })


//zadanie 1 
const ulList = document.createElement('ul')
const liItem = document.createElement('li')

document.body.append(ulList)
const number = 10

for (let i = 1; i <= 10; i++) {
  const liItem = document.createElement('li')
  ulList.append(liItem)
  liItem.textContent = i
  // console.log(ulList)
}

const lastLi = ulList.querySelector('li:last-child')
console.log(lastLi)

// lastLi.textContent = 'Jestem ostatnim elementem'
lastLi.innerHTML = 'Jestem ostatnim elementem'

lastLi.style.backgraound = 'blue'
lastLi.style.fontSize = '48px'
lastLi.style.padding = '20 px 40px'