// const btn = document.querySelector('button')
// const img = document.querySelector('img')

// const URL = 'https://dog.ceo/api/breeds/image/random'

// //fetch().then().catch()

// // fetch(URL)
// //     .then()
// //     .then()
// //     .then()
// //     .then()
// //     .catch(err => console.log(err))

// // fetch(URL)
// //     .then(res => console.log(res))
// //     .catch(err => console.log(err))



    
// btn.addEventListener('click', () => {
//   fetch(URL)
//     .then(res => res.json())
//     .then(data => img.setAttribute('src', data.message))
//     .catch(err => console.log(err))
// })

/////////////////////////////////
// synchroniczność vs asynchroniczność

// const btn = document.querySelector('button')

// btn.addEventListener('click', () => {
//   console.log('wykonuję się pierwszy')
//   const p = document.createElement('p')
//   alert('stowrzyłem paragraf!')
//   p.textContent = 'test'
//   document.body.append(p)
//   console.log('koniec')
// })

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 800)
// console.log(3)

/////////////////////////////////
// promisy

// const test = new Promise((resolve, reject) => {
//   if(!true) {
//     resolve('jest ok')
//   } else {
//     reject('błąd')
//   }
// })
    
// test
//   .then(info => console.log(info))
//   .catch(err => console.log(err))

/////////////////////////////////
// GET, POST, PUT, PATCH

// const url = 'mmcschool.pl'

// const test = {
//   method: 'POST'
// }

// fetch(url, {
//   method: 'GET'
// })

// fetch(url, test)


/////////////////////////////////
// async & await

// const checkAge = age => {
//   return new Promise((resolve, reject) => {
//     if (age >= 18) {
//       resolve()
//     } else {
//       reject()
//     }
//   })
// }

// const doubleCheck = () => {
//   return new Promise(resolve => {
//     console.log('Sprawdzam jeszcze raz ...')
//     setTimeout(() => {
//       resolve('Faktycznie, wiek się zgadza')
//     }, 1000)
//   })
// }

// checkAge(50)
//   .then(() => {
//     console.log('Chyba możesz wejść')
//     return doubleCheck()
//   })
//   .then(res => console.log(res))
//   .then(() => {
//     console.log('Weryfikacja zakończona')
//   })
//   .catch(error => console.log(error))

// async function test() {
//   try {
//     await checkAge(15)
//     console.log('Chyba możesz wejść')
//     await doubleCheck()
//     console.log(('Faktycznie, wiek się zgadza'));
//     console.log('Weryfikacja zakończona')
//   } catch {
//     console.log('Bląd, masz za mało lat.');
//   }
// }

// test()

// przykład
// const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

// async function test () {
//   try {
//     const res = await fetch(URL)
//     const data = await res.json()

//     console.log(data)
//   } catch {
//     console.error('ups, blądeł')
//   }
// }

// test()

/////////////////////////////////
// axios

const img1 = document.querySelector('.one')
const img2 = document.querySelector('.two')
const img3 = document.querySelector('.three')

const URL = 'https://dog.ceo/api/breeds/image/random'

fetch(URL)
  .then(res => res.json())
  .then(res => img1.setAttribute('src', res.message))

axios.get(URL).then(res => {
  img2.setAttribute('src', res.data.message)
})

async function showImg() {
  const res = await axios.get(URL)
  img3.setAttribute('src', res.data.message)
}

showImg()