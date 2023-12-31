import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Person'
import Notification from './components/Notification'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [search, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)
  const [styleColor, setStyleColor] = useState('green')

  const hook = () => {
    const promise = personsService.getPersons()
    const eventHandler = response => setPersons(response)
    
    promise.then(eventHandler)
  }

  useEffect(hook, [])

  const searchHandler = (event) => {
    setSearch(event.target.value)
  }

  const addHandler = (event) => {
    event.preventDefault()

    const keys = persons.map(person => person.name)

    if(keys.includes(newName)) {
      const question = `${newName} is already added to phonebook, replace the old number with a new one?`
      if(window.confirm(question)) {
        const id = persons.find(p => p.name === newName).id
        
        const newPerson = {
          name: newName,
          number: newNumber,
          id: id
        }
        personsService.updatePerson(id, newPerson)

        const newPersons = persons.slice()
        const index = keys.indexOf(newName)
        newPersons.splice(index, 1, newPerson)
        setPersons(newPersons)

        setNotification(`Edited ${newName}'s number`)
        setTimeout(() => setNotification(null), 5000)
      }
    } else {
      const toConcat = {
        name: newName,
        number: newNumber
      }

      const promise = personsService.createPerson(toConcat)
      const eventHandler = response => setPersons(persons.concat(response))
    
      promise.then(eventHandler)
      
      setStyleColor('green')
      setNotification(`Added ${newName}`)
      setTimeout(() => setNotification(null), 5000)
    }

    setNewName('')
    setNewNumber('')
  }

  const delHandler = (name, id) => {
    const ids = persons.map(person => person.id)
    const index = ids.indexOf(id)
    const newPersons = persons.slice()
    newPersons.splice(index, 1)
    setPersons(newPersons)
    setStyleColor('green')
    setNotification(`Removed ${name}`)
    setTimeout(() => setNotification(null), 5000)
  }

  const delErrHandler = (name, id) => {
    const ids = persons.map(person => person.id)
    const index = ids.indexOf(id)
    const newPersons = persons.slice()
    newPersons.splice(index, 1)
    setPersons(newPersons)
    setStyleColor('red')
    setNotification(`Information of ${name} has already been removed from server`)
    setTimeout(() => setNotification(null), 5000)
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
      <Notification 
      message={notification}
      styleColor={styleColor}/>
      <Filter 
        text={search}
        handler={searchHandler}
      />
      <h2>add a new</h2>
      <PersonForm 
        name={newName}
        nameHandler={changeNameHandler}
        number={newNumber}
        numberHandler={changeNumberHandler} 
        clickHandler={addHandler}
      />
      <h2>Numbers</h2>
      <Persons 
        array={persons}
        text={search}
        setter={delHandler}
        errMsg={delErrHandler}
      />
    </div>
  )
}

export default App
