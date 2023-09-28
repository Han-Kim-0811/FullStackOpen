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
      <p>
        {props.parts[0]} {props.exercises[0]}
      </p>
      <p>
        {props.parts[1]} {props.exercises[1]}
      </p>
      <p>
        {props.parts[2]} {props.exercises[2]}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.num}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a componet'
  const exercise3 = 14

  return (
    <>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} exercises={[exercise1, exercise2, exercise3]} />
      <Total num={exercise1 + exercise2 + exercise3} />
    </>
  )
}

export default App