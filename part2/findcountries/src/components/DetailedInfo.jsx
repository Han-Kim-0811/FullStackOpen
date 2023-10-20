import { useState } from "react"
import countriesService from "../services/countries"

const DetailedInfo = ({name}) => {
  const [country, setCountry] = useState(null)

  if(country === null || country.name.common != name) {
    countriesService.getOne(name).then(response => {
      console.log(response)
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
      {Object.values(country.languages).map(lang => <li>{lang}</li>)}

      
      <img style={{paddingTop: 20, width: 200}}
        src={country.flags.png}
        alt={country.flags.alt}
      />
    </div>
  )
}

export default DetailedInfo