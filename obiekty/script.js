// const myObject = {
//   key: value,
//   key: value,
//   key: value
// }

// const newUser = {
//   name: 'Lisa',
//   age: 23,
//   car: {
//     brand: 'Audio',
//     model: 'A3',
//     color: 'czarny'
//   }
// }

// console.log(newUser)
// console.log(newUser.name)
// console.log(newUser.age)
// console.log(newUser.car.color)

//////////////////////////////
// metody w obiektach

// const newUser = {
//   name: 'Lisa',
//   age: 23,
//   car: {
//     brand: 'Audio',
//     model: 'A3',
//     color: 'czarny',
//     sound: function () {
//       console.log('brum brum')
//     }
//   }
// }

// newUser.car.sound()

//////////////////////////////
// dodawanie rzeczy do obiektów

// const user = {
//   name: 'Lisa',
//   age: 23,
//   'fav-color': 'czerwony'
// }

// user.country = 'Polska'

// user['fav-color'] = 'niebieski'

// console.log(user)

// const dogName = 'Drops'
// const dogAge = 5

// const dog = {
//   // name: dogName,
//   // age: dogAge

//   dogName: dogName,
//   dogAge: dogAge
// }

// console.log(dog)

// const cat = {
//   fur: 'brown'
// }

// cat.miau = 'miu miau'
// cat['age'] = 57

// console.log(cat)

//////////////////////////////
//pętla for in

// const user = {
//   name: 'Klaudia',
//   age: 23,
//   sex: 'female',
//   'hair-color': 'blonde'
// }

// for(const data in user) {
//   console.log(user[data])
// }

//////////////////////////////
// this

// const user = {
//   name: 'jerzy',
//   print() {
//     console.log(this.name)
//   }
// }

// user.print()

//////////////////////////////
// konstruktor

// function User(name, age) {
//   this.name = name, 
//   this.age = age
// }

// const newUser = new User('Jarek', 33)
// const newUser1 = new User('Kamil', 28)
// const newUser2 = new User('Wojtek', 35)

//////////////////////////////
// prototyp

// User.prototype.hello = function() {
//   console.log(`Cześć ${this.name}`)
// }

// User.prototype.country = 'Polska'

// const newUser = new User('Jarek', 33)
// const newUser1 = new User('Kamil', 28)
// const newUser2 = new User('Wojtek', 35)
// newUser.hello()

// console.log(newUser, newUser1, newUser2)
// console.log(newUser.country )

// zadanie jedzonko 

const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')

console.log(btn1)

function Food(foodName, price) {
  this.foodName = foodName,
  this.price = price
}

const firstFood = new Food('burger', 55)
const secondFood = new Food('sałatka', 15)
const thirdFood = new Food('spagetthi', 35)

Food.prototype.foodInfo = function () {
  console.log(`${this.foodName} kosztuje ${this.price}`)
}


btn1.addEventListener('click', () => firstFood.foodInfo())
btn2.addEventListener('click', () => secondFood.foodInfo())
btn3.addEventListener('click', () => thirdFood.foodInfo())