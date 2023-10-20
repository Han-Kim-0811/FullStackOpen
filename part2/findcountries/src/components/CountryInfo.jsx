import DetailedInfo from "./DetailedInfo"

const CountryInfo = ({countries, toFind}) => {
  if(toFind === '') {
    return <div></div>
  }

  const toShow = countries.filter(country => country.toLowerCase().includes(toFind.toLowerCase()))

  if(toShow.length > 10) {
    return <div>Too many matches, specify another filter</div>
  } else if(toShow.length == 1) {
    return <DetailedInfo name={toShow[0]}/>
  } else if(toShow.length == 0) {
    return <div>No matches found</div>
  } else{
    return toShow.map(country => <div key={country}>{country}</div>)
  }
}

export default CountryInfo