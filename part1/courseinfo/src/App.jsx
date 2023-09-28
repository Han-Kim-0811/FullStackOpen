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
        {props.part} {props.exercise}
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
      <Content part={part1} exercise={exercise1} />
      <Content part={part2} exercise={exercise2} />
      <Content part={part3} exercise={exercise3} />
      <Total num={exercise1 + exercise2 + exercise3} />
    </>
  )
}

export default App