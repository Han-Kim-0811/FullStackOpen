import { useState, useEffect } from "react"
import CountryFrom from "./components/CountryForm"
import CountryInfo from "./components/CountryInfo"
import countriesService from "./services/countries"

const App = () => {
  const [toFind, setToFind] = useState('')
  const [countries, setCountries] = useState([])

  const hook = () => {
    countriesService.getAll().then(response => {
      const names = response.map(country => country.name.common)
      setCountries(names)
    })
  }

  useEffect(hook, [])

  const nameChangeHandler = (event) => {
    setToFind(event.target.value)
  }

  return (
    <div>
      <CountryFrom 
        val={toFind}
        handler={nameChangeHandler}
      />

      <CountryInfo
        countries={countries}
        toFind={toFind}
      />
    </div>
  )
}


export default App
