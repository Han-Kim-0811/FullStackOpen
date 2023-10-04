import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const buttonHandler = (event) => {
    event.preventDefault()

    const keys = persons.map(person => person.name)

    if(keys.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const toConcat = {
        name: newName,
        number: newNumber
      }
  
      setPersons(persons.concat(toConcat))
    }
  }

  const changeNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const changeNumberHandler = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
          value={newName} 
          onChange={changeNameHandler} />
        </div>
        <div>
          number: <input 
          value={newNumber}
          onChange={changeNumberHandler}/>
        </div>
        <div>
          <button type="submit" onClick={buttonHandler}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
