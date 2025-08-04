const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.count}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 700 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part={parts[0].part} exercises={parts[0].exercises} />
      <Content part={parts[1].part} exercises={parts[1].exercises} />
      <Content part={parts[2].part} exercises={parts[2].exercises} />
      <Total count={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App
