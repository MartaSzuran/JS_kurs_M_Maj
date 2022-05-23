const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=e3e0608fa3adb27f1a11c2e7d7d1d75d'
const API_UNITS = '&units=metric'

const getWeather = () => {
  // if there is no input take London
  const city = input.value || 'London'
  const URL = API_LINK + city + API_KEY + API_UNITS

  axios.get(URL).then(res => {
    console.log(res.data)
    const temp = res.data.main.temp
    const hum = res.data.main.humidity
    // wykorzystaliśmy rest spread operator ...
    // można też tak  -  console.log(res.data.weather[0])
    const status = Object.assign({}, ...res.data.weather)
    console.log(status.id)
    photo.setAttribute('src', weatherCond(status.id))

    cityName.textContent = res.data.name
    weather.textContent = status.main
    temperature.textContent = Math.floor(temp) + 'C'
    humidity.textContent = hum + '%'

    warning.textContent = ''
    input.value = ''

  }).catch(()=> warning.textContent = 'Wpisz poprawaną nazwę miasta!')
}

const weatherCond = id => {
  if (id >= 200 && id <= 232) {
    return './img/thunderstrom.png'
  } else if (id >= 300 && id <= 321) {
    return './img/drizzle.png'
  } else if (id >= 500 && id <= 531) {
    return './img/rain.png'
  } else if (id >= 600 && id <= 622) {
    return './img/snow.png'
  } else if (id >= 701 && id <= 781) {
    return './img/fog.png'
  } else if (800 == id) {
    return './img/sun.png'
  } else if (id > 800 && id <= 900){
    return './img/cloud.png'
  } else {
    return './img/unknown.png'
  }
}

const enterCheck = e => { 
  if (e.key == 'Enter') {
    getWeather()
  }
} 

// getWeather()
button.addEventListener('click', getWeather)
input.addEventListener('keyup', enterCheck)

