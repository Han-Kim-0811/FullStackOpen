import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    const promise = axios.get('http://localhost:3001/persons')
    const eventHandler = response => setPersons(response.data)

    promise.then(eventHandler)
  }

  useEffect(hook, [])

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

      const promise = axios.post('http://localhost:3001/persons', toConcat)
      const eventHandler = response => setPersons(persons.concat(response.data))
    
      promise.then(eventHandler)
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
