import { useState } from 'react'

const Person = ({ person }) => <li>{person.name}</li>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const addName = (event) => {
    event.preventDefault()

    if (isValidName(newName, persons)) {
      const personObject = { name: newName.trim() }
      setPersons(persons.concat(personObject))
      setNewName('')
    } else {
      alert(`${newName.trim()} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
            <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

function isValidName(newName, persons) {
  let isValid = true
  persons.forEach((person) => {
    if (person.name.toLowerCase() === newName.toLowerCase().trim()) {
      isValid = false
    } 
  })
  return isValid
} 

export default App