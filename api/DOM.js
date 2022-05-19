// // getElementById
// const test = document.getElementById('item')
// console.log(test)

// // getElementsByTagName
// const test2 = document.getElementsByTagName('ul')
// console.log(test2)

// // getElementsByClassName
// const test3 = document.getElementsByClassName('test')
// console.log(test3)

// querySelector (ES6)
// const test = document.querySelector('#item')
// console.log(test)

// //class
// const test1 = document.querySelector('.test')
// // id
// const test2 = document.querySelector('#item')

// //przeszukaj li które jest w ul
// const test3 = document.querySelector('ul li')
// console.log(test3)

// // pobranie całe ul listy
// const ulList = document.querySelector('ul')
// console.log(ulList)

// // const liItem = ulList.querySelector('li')
// // console.log(liItem)

// // querySelectorAll

// const liItems = document.querySelectorAll('li')
// console.log(liItems)

// // const liItems2 = document.querySelectorAll('li.test')

// // żywe kolekcje, czyli qSA vs getElementByTag / ClassName
// const newLi = document.createElement('li')
// ulList.appendChild(newLi).textContent = '00'

// console.log(liItems.length)
// const test1  = document.getElementsByTagName('li')
// console.log(test1.length)

// zadanie
const allParag = document.querySelectorAll('p')
console.log(allParag)

const div = document.querySelector('.test')
console.log(div)

const paraWithId = div.querySelector('#test')
console.log(paraWithId)
