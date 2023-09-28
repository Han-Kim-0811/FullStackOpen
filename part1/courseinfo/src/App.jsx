const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} exercise={props.exercises[0]}/>
      <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      <Part part={props.parts[2]} exercise={props.exercises[2]}/>
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