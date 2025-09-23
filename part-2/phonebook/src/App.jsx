import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value.replace(/[^0-9-]/, ''))
  const handleSearchChange = (event) => setNewSearch(event.target.value)

  const addName = (event) => {
    event.preventDefault()

    if (isValidName(newName, persons)) {
      const personObject = { 
        name: newName.trim(),
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName.trim()} is already added to phonebook`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={newSearch} onChange={handleSearchChange} />

      <h3>Add new contact</h3>
      <PersonForm
         onSubmit={addName}
         nameValue={newName}
         onNameChange={handleNameChange}
         numberValue={newNumber}
         onNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App

function isValidName(newName, persons) {
  let isValid = true
  persons.forEach((person) => {
    if (person.name.toLowerCase() === newName.toLowerCase().trim()) {
      isValid = false
    } 
  })
  return isValid
} 