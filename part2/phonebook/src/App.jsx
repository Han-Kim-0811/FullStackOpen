import { useState } from 'react'

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

  const personsToShow = search === '' 
        ? persons 
        : persons.filter(person => person.name.includes(search)) 

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
      <div>
        filter shown with <input
        value={search} 
        onChange={searchHandler}/>
      </div>
      <h2>add a new</h2>
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
      {personsToShow.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App
