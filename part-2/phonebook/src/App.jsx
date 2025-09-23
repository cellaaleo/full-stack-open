import { useState } from 'react'

const Person = ({ person }) => <li>{person.name} {person.number}</li>

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

  const result = persons.filter((person) => 
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  const addName = (event) => {
    event.preventDefault()

    if (isValidName(newName, persons)) {
      const personObject = { name: newName.trim(), number: newNumber }
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
        <div>
          Filter by name <input type="search" value={newSearch} onChange={handleSearchChange} />
        </div>

      <h2>Add new contact</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <ul>
        {result.map(person => 
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