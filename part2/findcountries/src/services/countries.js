import axios from 'axios'

const url = 'https://studies.cs.helsinki.fi/restcountries/api'
const api_key = import.meta.env.VITE_SOME_KEY
const weatherUrl = ['https://api.openweathermap.org/data/2.5/weather?lat=', '&lon=', '&units=metric&appid=']
const geocodeUrl = ['https://api.openweathermap.org/geo/1.0/direct?q=', '&limit=1&appid=']
const getData = response => response.data

const getAll = () => {
  return axios.get(`${url}/all`).then(getData)
}

const getOne = (name) => {
  return axios.get(`${url}/name/${name}`).then(getData)
}

const getWeatherHelper = (lat, lon) => {
  return axios
    .get(weatherUrl[0] + lat + weatherUrl[1] + lon + weatherUrl[2] + api_key)
    .then(getData)
}

const getWeather = (city, code) => {
  return axios
    .get(geocodeUrl[0] + city + ',' + code + geocodeUrl[1] + api_key)
    .then(getData)
    .then(data => {
      return getWeatherHelper(data[0].lat, data[0].lon)
    }
  ).catch(() => -1)
}

export default { getAll, getOne, getWeather}