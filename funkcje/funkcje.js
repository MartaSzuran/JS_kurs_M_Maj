// // deklaracje funkcji

// function test() {
//   console.log('cześć')
// }

// test()

// // wyrażenie funkcyjne
// const helloWorld = function () {
//   console.log('cześć 123')
// }

// helloWorld()

// // funkcja z argumentami

// function add(param) {
//   console.log(`Podany arg to: ` + param)
// }

// add('test')

// function add2(x, y) { 
//   return console.log(x+y)
// }

// add2(5,8)

// function add3(x, y) {
//   if (x < y) return

//   console.log(x + y)
// }

// //nic się nie dzieje ponieważ gdy x jest mniejszy od y wychodzimy z funkcji
// add3(10, 15)

// // wyloguje 25
// add3(15, 10)

// function twoparams(x, y) {
//     console.log(`Cześć mam na imię ${x} mam ${y} lat.`)
// }

// twoparams('Jola', 45)

// const heading = document.querySelector('h1')

// function test() {
//   console.log('Kliknięto mnie!');
// }

// heading.addEventListener('click', test)
// // heading.addEventListener('click', function () {
// //   console.log('Kliknięto mnie!');
// // })

// funkcja strzalkowa budowa
// const arrowFunction = () => {

// }

// //normalna funkcja
// function name1(user_name) {
//   console.log(`Mam na imię ${user_name}`)
// }

// name1('Klaudia')

// // funkcja strzalkowa
// const name2 = (user_name) => {
//   console.log(`Mam na imię ${user_name}`)
// }

// name2('Lisa')

// const name3 = name => console.log(`Mam na imię ${name}`)

// name3('Roman')

// const name4 = (name, age) => console.log(name, age)

// name4('Julia', 23)

// function add(num1, num2) {
//   return num1+num2
// }

// const add2 = (num1, num2) => num1+num2

// const add3 = (num1, num2) => {
//   console.log('czesc')
//   return num1+num2
// }

// const days = ['poniedziałek', 'wtorek', 'środa']
// const days2 = days.forEach(function (day) {
//   console.log(day)
// })

// console.log('----------')
// const days3 = days.forEach( day => console.log(day))
// console.log(days3)

// const numbers = [2, 5, 7, 4]

// const devision = numb => console.log(numb / 3)
// numbers.forEach(number => devision(number))

// const hello = imie => console.log(`cześć, ${imie}`)

// hello('Anita')

// DOMYŚLE ARGUMENTY FUNCKJI
// cześć IMIE, jak się masz?
//funkcja strzałkowa, która robie jedną rzcz, usuwamy {}
// const hello = (name = 'drogi użytkowniku') => console.log(`cześć ${name}, jak się masz?`)

// hello()
// hello('Klaudia')

// const add = (x=5, y=25) => {console.log(x+y)}

// add()
// add(12)
// add(1,34)

// operator rest

//SPRED
const arr = [1, 2, 3, 4]
console.log(arr)
console.log(...arr)

// REST

const numbers = (x, y, ...z) =>  {
  console.log(x, y, z)
  console.log(z.map(el => el*2))
}

numbers(13, 4332, 53, 321, 86, 324, 1, 7)