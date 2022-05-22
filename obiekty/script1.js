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

const btns = document.querySelectorAll('button')

btns.forEach(btn => btn.addEventListener('click', (e) => {
  // console.log(this.textContent)
  console.log(this)
  console.log('------')
  console.log(e.target)
}))

const ob = {
  number: 123,
  showNumber1() {
    console.log(this.number)
  },
  showNumber2() {
    const test = () => {
      console.log(this.number)
    }
    test()
  }
}

ob.showNumber1()
ob.showNumber2()

