// for (let i = 0; i < 6; i++) {
//   console.log(i)
// }

// zdanie

// colors = ['blue', 'white', 'green']

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
let i = 0

// while (i < 5) {
//   i++
//   console.log(i)
// }

// do {
//   i++
//   console.log(i)
// } while (i < 2)

// for of
// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]*2)
// }

// for (const number of numbers) {
//   console.log(number*2)
// }

//zadanie 1

// cities = ['bruksela', 'warszawa', 'paryż']

// for (let i = 0; i < cities.length; i++) {
//   console.log(`To miasto nazywa się: ${cities[i].toUpperCase()}`)
// }

// zadanie 2
// let x = 0

// while (x <= 10) {
//   console.log(x)
//   x = x + 2
// }


//zadanie 3
// let x = 20

// do {
//   x = x - 3
// } while (x > 0)

// console.log(x)

// zadanie 4
let numbers = [5, 8, 10, 23, 48, 60]

for (const number of numbers) {
  console.log(number/5)
}

for (const number of numbers) {
  if (number % 2 == 0) {
    console.log(`%cLiczba ${number} jest parzysta.`, 'background-color: gold; color:black')
  } else {
    console.log(`Liczba ${number} jest nieparzysta.`)
  }
}