const Filter = ({ value, onChange }) => {
  return (
    <div>
      Filter by name: <input type="search" value={value} onChange={onChange} />
    </div>
  )
}

export default Filter