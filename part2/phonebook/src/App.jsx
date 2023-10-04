import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

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
      <Filter text={search} handler={searchHandler} />
      <h2>add a new</h2>
      <PersonForm name={newName} nameHandler={changeNameHandler}
      number={newNumber} numberHandler={changeNumberHandler} 
      clickHandler={buttonHandler}/>
      <h2>Numbers</h2>
      <Persons array={persons} text={search}/>
    </div>
  )
}

export default App
