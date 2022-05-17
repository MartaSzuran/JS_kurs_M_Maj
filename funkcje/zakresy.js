// const name = 'Lisa'
// let food

// const test = () => {
//   const name = 'Tony'
//   console.log(`NAME w funckji - ${name}`)

//   food = 'schabowy'
//   console.log(food)

//   const age = 23
//   console.log(age)

//   const test2 = () => {
//     console.log(name)
//   }
// }
// test()

// console.log(`NAME w funckji - ${name}`)

// console.log(food)

// console.log('----------')
// console.log(age)

// powtórka z forEach i callback

// const numbers = [0.5, 4, 'abc']

// const names = ['Lisa', 'Lily', 'Adam', 'Przemek']

// numbers.forEach(num => console.log(num * num))

// const bigNames = names.map(name => name.toLocaleUpperCase())
// console.log(bigNames)

// const showBigNames = (name) => {
//   console.log(name.toUpperCase())
// }

// names.forEach(showBigNames)
// console.log('--------------')

// names.forEach(el => console.log(el.toUpperCase()))

//zadanie 1

// let score 

// const add = (x, y) => {
//   score = x + y ;
//   // if (score % 2 == 0) {
//   //   even(score)
//   // } else {
//   //   odd(score)
//   // }

//   /// jest błą bo nie ma średnika i myśli, że to kontynuacja ...
//   // możemy pominąć średnik, a usunąć nawiasy
//   (score % 2 == 0) ? even(score) : odd(score)

// }


// const even = x => {
//     console.log(`Liczba ${x} jest parzysta`)
// }

// const odd = x => {
//     console.log(`Liczba ${x} jest nieparzysta`)
// }

// add(4,6)

// zadnie 2

// let celcius 
// let temp

// const farenheit = (c = celcius) => {temp = c * 1.8 + 32
//   return console.log(`${c} C = ${temp} F`)
// }

// farenheit(23)

// zadnie 3

let num = 10
let numbers = []

for (let i = 0; i < num; i++) {
  numbers.push(i)
}

console.log(numbers)

const func = x => {
  if (x % 3 === 0 && x !== 0) {
    console.log(`${x} jest podzielne przez 3`)
  } else { 
    console.log(`${x} nie jest podzielne przez 3 lub x jest 0`)
  }
}

numbers.forEach(num => func(num))