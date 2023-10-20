import { useState } from "react"
import DetailedInfo from "./DetailedInfo"

const CountryList = ({countries}) => {
  const [country, setCountry] = useState(null)

  const showHandler = name => setCountry(name)

  return (
    <div>
      {countries.map(country => 
        <div key={country}>
          {country}
          <button onClick={() => showHandler(country)}>
            show
          </button>
        </div>
      )}
      <DetailedInfo name={country}/>
    </div>
  )
}

export default CountryList