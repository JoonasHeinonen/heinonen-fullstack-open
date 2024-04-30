const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ( props ) => <h1>{props.course}</h1>

  const Content = ( props ) => {
    return (
      <div>
        <p>
          {props.parts[0].name} {props.parts[0].exercises}
        </p>
        <p>
          {props.parts[1].name} {props.parts[1].exercises}
        </p>
        <p>
          {props.parts[2].name} {props.parts[2].exercises}
        </p>
      </div>
    )
  }

  const Total = (props) => {
    const parts = props.parts
    let total = 0

    parts.forEach((part) => {
      total += part.exercises
    })

    return (
      <p>Number of exercises { total }</p>
    )
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App
