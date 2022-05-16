// IF ELSE

// const word = "saga!dga"

// if (word.length > 10 && word.includes('!'))
// {
//   console.log('Masz rewelacyjne hasło.')
// }
// else if (word.length > 10)
// {
//   console.log('Masz dobre hasło.')
// }
// else
// {
//   console.log('Masz za krórtkie hasło.')
// }

// SWITCH

// operator warunkoy

// const x = 10

// if (x > 20) {
//   console.log(`${x} > 20`)
// } else {
//   console.log(`${x} < 20`)
// }

// const newX = x > 20 ? (`${x} > 20`): (`${x} < 20`)

// console.log(newX)

// zadanie1: OK
// const x = 50
// const y = 30

// if (x > y) {
//   console.log(`${x} jest większe, niż ${y}`)
// }


// zadanie2: OK
// const color = 'blue'
// const newColor = 'green'

// if (color == newColor) {
//   console.log("Kolory się zgadzają.")
// } else {
//   console.log("Kolory się nie zgadzają.")
// }

// zadanie3: OK
// const x = 100
// const y = 50

// if (x > y) {
//   console.log(`${x} > ${y}`)
// } else if (x === y) {
//   console.log(`${x} = ${y}`)
// } else {
//   console.log(`${x} < ${y}`)
// }

// zadanie4: OK
// const promo = '20%'

// switch  (promo) {
//   case '10%':
//     console.log("Dziś mamy 10% zniżki.");
//     break;

//   case '20%':
//     console.log("Dziś mamy 20% zniżki.");
//     break;

//   case '30%':
//     console.log("Dziś mamy 30% zniżki.");
//     break;
//  zapomnialam o default
//    default:
//    console.log(`Dziś mamy ${promo} zniżkę.`)

// }

// zadanie5: OK
// const x = 9

// if (x % 2 == 0) {
//   console.log(`${x} jest parzysta.`)
// } else {
//   console.log(`${x} jest nieparzysta.`)
// }

// zadanie6: OK
const x = 23
if (x >= 100) {
  console.log(('x jest większy lub równy 100').toUpperCase())
} else if (30 > x > 100) {
  console.log(('x jest średniakiem').toUpperCase())
} else if (x < 30) {
  console.log(('x jest mały').toUpperCase())
}
