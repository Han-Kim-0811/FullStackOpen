const CountryFrom = ({val, handler}) => {
  return(
    <form>
      <div>
        find countries
        <input 
          value={val} 
          onChange={handler}
        />
      </div>
    </form>
  )
}

export default CountryFrom