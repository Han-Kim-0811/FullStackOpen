import { useState } from "react"
import CapitalWeather from "./CapitalWeather"
import countriesService from "../services/countries"


const DetailedInfo = ({name}) => {
  const [country, setCountry] = useState(null)

  if(name === null) {
    return <div></div>
  }

  if(country === null || country.name.common != name) {
    countriesService.getOne(name).then(response => {
      setCountry(response)
    })

    return <div></div>
  }

  return (
    <div>
      <h1>{name}</h1>
      <div>capital {country.capital}</div>
      <div>area {country.area}</div>

      <h3>languages:</h3>
      {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}

      
      <img style={{paddingTop: 20, width: 200}}
        src={country.flags.png}
        alt={country.flags.alt}
      />

      <CapitalWeather capital={country.capital} countryCode={country.cca2}/>
    </div>
  )
}

export default DetailedInfo