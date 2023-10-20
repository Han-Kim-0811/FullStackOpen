import { useState } from "react"
import countriesService from "../services/countries"

const CapitalWeather = ({capital, countryCode}) => {
  const [weather, setWeather] = useState(null)
  const iconUrl = ['https://openweathermap.org/img/wn/', '@2x.png']

  if(weather === null) {
    countriesService.getWeather(capital, countryCode)
    .then(data => {
      setWeather(data)
    })
    return <div></div>
  }

  if(weather === -1) {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <div>Could not find any data</div>
      </div>
    )
  }

  return (
    <div>
      <h2>Weather in {capital}</h2>
      <div>temperature {weather.main.temp} Celcius</div>
      <img
        src={iconUrl[0] + weather.weather[0].icon + iconUrl[1]}
        alt={weather.weather[0].description}/>
      <div>wind {weather.wind.speed} m/s</div>
    </div>
  )
}

export default CapitalWeather