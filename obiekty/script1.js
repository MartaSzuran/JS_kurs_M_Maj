// this cz.1
// console.log(this)

// const person = {
//   name: 'Lisa',
//   'fav-meal': 'schabowy',
//   // showInfo () {
//   //   console.log(this),
//     // console.log(this["fav-meal"])
//   address: {
//     city: 'Kraków',
//     'zip-code': '00-000',
//     showCity: function () {
//       console.log(this.city)
//     }
//   }
// }

// // person.showInfo()
// person.address.showCity()

// function Food(name) {
//   this.name = name
// }

// const meal = new Food('schabowy')
// const meal1 = new Food('jabłko')

// console.log(meal, meal1)

//////////////////////
// this cz.2

// const btns = document.querySelectorAll('button')

// btns.forEach(btn => btn.addEventListener('click', (e) => {
//   // console.log(this.textContent)
//   console.log(this)
//   console.log('------')
//   console.log(e.target)
// }))

// const ob = {
//   number: 123,
//   showNumber1() {
//     console.log(this.number)
//   },
//   showNumber2() {
//     const test = () => {
//       console.log(this.number)
//     }
//     test()
//   }
// }

// ob.showNumber1()
// ob.showNumber2()

//////////////////////
// bind

// function test() {
//   console.log(this)
//   console.log(this.name)
// }

// const car1 = {
//   name: 'Audi',
// }

// const car2 = {
//   name: 'Dodge',
// }

// const car3 = {
//   name: 'Nissan',
// }

// test.bind(car1)()

//////////////////////
// call & apply
// const movie = { 
//   title: 'Avengers',
// }

// function showMovie(price, cinema) {
//   console.log(`Film ${this.title}, cena: ${price}, kino: ${cinema}`)
// }

// showMovie(30, 'superkino')

// showMovie.call(movie, 35, 'superkino2')

// showMovie.apply(movie, [35, 'superkino3'])

//////////////////////
// klasy

// po staremu
// function Person(name, age) {
//   this.name = name,
//   this.age = age
// }

// Person.prototype.sayHi = function () {
//   console.log(`cześć, jestem ${this.name}`)
// }

// Person.prototype.showAge = function () {
//   console.log(`mam ${this.age} lat`)
// }

// const person1 = new Person('janusz', 55)
// console.log(person1)


// person1.sayHi()
// person1.showAge()

// // -------

// class Person2 {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }

//   sayHi(){
//     console.log(`cześć, jestem ${this.name}`)
//   }

//   showAge = function() {
//     console.log(`mam ${this.age} lat`)
//   }
// }

// const person2 = new Person2('darek', 65)
// person2.sayHi()

// // ćwiczonko
// function Food(type, price) {
//   this.type = type,
//   this.price = price
// }

// Food.prototype.show = function() {
//   console.log(`${this.type} kosztuje ${this.price}`)
// }

// const food1 = new Food('mięcho', 55)
// food1.show()

// class Food2 {
//   constructor(type, price) {
//     this.type = type,
//     this.price = price
//   }

//   show() {
//     console.log(this)
//     console.log(`${this.type} kosztuje ${this.price}`)
//   }
// }

// const food2 = new Food2('słodycze', 25)
// food2.show()

//////////////////////
// extends & super

// class Animal {
//   constructor(name) {
//     this.name = name
//   }

//   sound() {
//     console.log('Zwierzak robie "hau hau".');
//   }
// }

// class Dog extends Animal {
//   constructor(name, age) {
//     super(name),
//     this.age = age
//   }
// }

// class Cat extends Animal {
//   constructor(name) {
//     super(name)
//   }

//   sound() {
//     console.log('miau');
//   }
// }
// const dog = new Dog('Drops', 6)
// dog.sound()
// console.log(dog)

// const cat = new Cat('mmm')
// console.log(cat);
// cat.sound()

// const testAnimal = new Animal('pies')

////////////////////////////////////////
// object assign

// const user = {
//   name: 'Lily',
//   age: 23
// }

// const pet = {
//   name: "drops",
//   type: 'dog'
// }

// // const userInfo = Object.assign(user, pet)
// const userInfo = Object.assign({}, user, pet)
// console.log(pet);
// console.log(user);

// console.log(userInfo);

// const userCopy = Object.assign({}, user)
// userCopy.age = 55
// console.log(userCopy);

// ////////////////////////////////////////
// destrukturyzacja obiektów

// const person = {
//   name: 'Lily',
//   age: 23,
//   job: 'DJ',
// }

// const showInfo = () => {

//   const {name, age, job} = person
//   //można też zrobić to tak
//   // const name = person.name

//   console.log(`${name} pracuje jako ${job} i ma ${age} lat.`);
// }

// showInfo()

/////////////////////
// bardziej skomplikowany przykład
// const person = {
//   name: 'Lily',
//   age: 23,
//   job: 'DJ',
//   car: {
//     brand: 'Dodge',
//     model: 'Viper'
//   }
// }

// const showInfo = ({name, age, job}) => {
//   console.log(`${name} pracuje jako ${job} i ma ${age} lat.`);
// }

// showInfo(person)

// const showInfo2 = ({car:{brand, model}}) => {
//   console.log(`Jej samochód to ${brand} ${model}.`);
// }

// showInfo2(person)

// const showInfo3 = () => {

//   const {car:{brand, model}} = person

//   console.log(`Jej samochód to ${brand} ${model}.`);
// }

// showInfo3(person)

/////////////////////
// destrukturyzacja tablic

const colors = ['red', 'green', 'blue']

const firstColor = colors[0]
const secondColor = colors[1]

const [first, second] = colors

console.log(firstColor, secondColor);
console.log(first, second);

const [,,third] = colors
console.log(third);


