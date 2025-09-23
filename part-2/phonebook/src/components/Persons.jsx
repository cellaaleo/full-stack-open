const Person = ({ person }) => <li>{person.name} {person.number}</li>

const Persons = ({ persons, newSearch }) => {
  const result = persons.filter((person) => 
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <ul>
      {result.map(person => 
        <Person key={person.id} person={person} />
      )}
    </ul>
  )
}

export default Persons