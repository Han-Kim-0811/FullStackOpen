import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('input name...')

  const buttonHandler = (event) => {
    event.preventDefault()

    const keys = persons.map(person => person.name)

    if(keys.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const toConcat = {
        name: newName
      }
  
      setPersons(persons.concat(toConcat))
    }
  }

  const changeHandler = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input 
                 value={newName} 
                 onChange={changeHandler} />
        </div>
        <div>
          <button type="submit" onClick={buttonHandler}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App
