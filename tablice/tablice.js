// const arr = [1,2,3,4,5,6]

// const btn1 = document.querySelector('button')

// // console.log(btn1);

// function btnMsg(e) {
//   console.log(`kliknięto ${e.target.textContent} ! :)`);
// }

// const btns = document.querySelectorAll('button')

// btns.forEach(btn => btn.addEventListener('click', btnMsg))

// --------
// metody

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers)

// numbers.unshift(-1,0)

// console.log(numbers)

// numbers.unshift(100,200)
// console.log(numbers)

// numbers.shift()
// console.log(numbers)

// numbers.push(44)
// console.log(numbers)

// numbers.pop()
// console.log(numbers)

// function multiply(x) {
//   return x*2
// }

// const newNumbers = numbers.map(multiply)

// console.log(numbers)
// // console.log(newNumbers)

// numbers.push(6, 7, 8)


// const abc = ['a', 'b', 'c']
// const newAbc = numbers.concat(1,4,6, true, abc)

// console.log(newAbc)


// // ... rest, spread 

// console.log(...abc)  

// const drinks = ['pepsi', 'kawa', 'sok']
// const meals = ['schabowy', 'spaghetti', 'zupa']

// const menu = [...drinks, ...meals]
// const menu2 = drinks.concat(meals)
// console.log(menu)
// console.log(menu2)

//zadanie slice() splice()

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ['red', 'green', 'blue', true, 123]
// const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

// const numbers2 = numbers.slice(0,2)
// console.log(numbers2)

// // może też być (-3)
// const numbers3 = numbers.slice(4,7)
// console.log(numbers3)

// const randomStuff = colors.splice(3, 4)
// console.log(randomStuff)
// console.log(colors)

// const newCars = cars.splice(2, 4, 'test')
// console.log(cars)
// console.log(newCars)

// filter()
// const numbers = [0, 23, 48, 175, 2, 34, 11]

// // function number(x) {
// //   return x % 2 === 0
// // }

// // console.log(numbers.filter(number))

// numbers.forEach(number => console.log(number * 5))

// console.log(numbers.includes('0'))
// console.log(numbers.indexOf(23))

// const numbers = [0, 1, 2, 3]

// const NewNumbers = numbers.forEach(number => console.log(number * 2))
// const newNumbers = numbers.map(number => (number * 2))
// console.log(newNumbers)

//zadanie 1 
// const letters = ['c', 'd']

// letters.unshift('a', 'b')
// letters.push('e', 'f')

// console.log(letters)

// console.log(letters.includes('c'))

// zadanie 2

// const numbers = [1, 6, 4, 2, 9]
// const foods = ['peperoni', 'hot dog', 'cebula']

// const newArray = [...numbers, ...foods]
// // const newArray = numbers.concat(foods)
// console.log(newArray)

// zadanie 3

// const numbers = [1, 5, 13, 26, 48]

// function multiply (x) {
//   return x *= 5
// }

// //mogłam też od razu w map 
// // const newArray = numbers.map(number => number * 5)
// const newArray = numbers.map(number => multiply(number))
// console.log(newArray)

// // mogłam też użyć for of 
// // for (const number of newArray) {}
// for (let i = 0; i < newArray.length; i++) {
//   if (newArray[i] % 2 == 0) {
//     console.log(`Liczba parzysta: ${newArray[i]}`)
//   } else {
//     console.log(`Liczba nieparzysta: ${newArray[i]}`)
//   }
// }

// zadanie 4

// const color = ['blue']

// color.unshift('green')
// color.push('yellow')
// console.log(color)

// for (let i = 0; i < color.length; i++) {
//   // console.log(`Mój ulubiony kolor to: ${color[i].toUpperCase()}`)
//   console.log(color[i].charAt(0).toUpperCase() + color[i].slice(1))
// }

// zadanie 5

const cars = 'Audi,Mercedes,BMW,Nissan,Dodge'
const carsArray = cars.split(',')
console.log(carsArray)

// operator warunkowy
carsArray.length > 3 ? console.log('Jest OK') : console.log('Nie jest OK')
// if (carsArray.length > 3) {
//   console.log('Jest OK')
// } else {
//   console.log('Nie jest OK')
// }

if (carsArray.includes('Audi')) {
  carsArray.push('nowa marka')
  console.log('jest adui')
} else {
  carsArray.pop()
}