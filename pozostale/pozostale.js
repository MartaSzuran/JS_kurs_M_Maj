// const test = () => {
//   console.log(':D');
// }

// test()

// setTimeout(test, 10000)

// setInterval(test, 1000)

//////////////////////////
'use strict'

// const colors = ['red', 'green', 'blue']

// for(const color of colors) {
//   console.log(color)
// }

////////////////
// alert('czesc')

// if (confirm('Chcesz cos powowiedziec ?')) {
//   console.log('tak')
// } else {
//   console.log('nie')
// }


// const name1 = prompt('Czesc, jak masz na imie?')
// console.log(name1)
////////////////
//obiekt math

// console.log(Math)
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.max(5, 10))
// console.log(Math.min(5, 10))


// console.log(Math.random())
// console.log(Math.random()*10)


// const number = Math.random() * 10

// console.log(Math.floor(number))

///////////////////
//atrybuty


// const link = document.querySelector('a')
// const img = document.querySelector('img')
// const p = document.querySelector('p')

// link.setAttribute('href', '#')
// link.setAttribute('target', '_blank')

// console.log(img.getAttribute('alt'))


// console.log(p.hasAttribute('src'))

// p.removeAttribute('style')

///////////////////
// data-atrybuty
// // const div = document.querySelector('div')
// const div1 = document.querySelector('[data-number="23"]')
// // console.log(div)
// console.log(div1.dataset.number)
// console.log(div1.dataset.moreInfo)

// div1.setAttribute('data-test', '123')
// console.log(div1.dataset)


///////////////////
// relacje rodzinne

// const grandpa = document.querySelector('.grandparent')
// // console.log(grandpa.querySelector('.parent'))
// // console.log(grandpa.querySelectorAll('.child'))

// const middleChild = document.querySelector('.middle-child')

// const prevSibling = middleChild.previousElementSibling
// console.log(prevSibling)

// const nextSibling = middleChild.nextElementSibling
// console.log(nextSibling)

// const parentEl = middleChild.parentElement
// console.log(parentEl)

// const grandEl = middleChild.parentElement.parentElement
// console.log(grandEl)



// console.log(middleChild.closest('p'))
// console.log(middleChild.closest('div'))
// console.log(middleChild.closest('.grandparent'))

// zadanie 1
// const img = document.querySelector('img')

// img.setAttribute('src', 'https://zwierzoklub.pl/blog/uploads/Pajaki3.jpg')
// img.setAttribute('alt', 'pajak')


// const printText = () => console.log('ble')

// setTimeout(printText, 2000)

// zadanie 2

// const liList = document.querySelectorAll('li')
// const number = 5
// for (let i = 1; i <= number; i++) {
//   liList[i-1].textContent = i
//   liList[i-1].setAttribute('data-atrybutID', i)
// }

// //inne rozwiazanie
// // const number1 = 1
// // for(const liItem of liList) {
// //   liItem.textContent = number1
// //   liItem.dataset.id = number1
// //   number1++
// // }

// const li3 = document.querySelector('[data-atrybutID="3"]')
// // const thirdChild = document.querySelectr('li:nth-child(3)')
// console.log(li3.closest('div'))


//konsola
console.log(window.console)
console.warn('warning')
console.error('errooooorrr')

console.table(['123', 123])

const persons = [
  {
    name: 'Lisa',
    age: 23
  },
  {
    name: 'Majek',
    age: undefined
  }
]

console.table(persons)