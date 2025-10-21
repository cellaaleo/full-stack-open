import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

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