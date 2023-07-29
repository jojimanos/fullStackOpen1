import { useState } from 'react'
import Header from "./Header"
import Button from "./Button"
import Stats from "./Stats"

const App = () => {

  const text = "Give us some feedback about our services"

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const methods = [
    {
      text: "Good",
      handler: () => setGood(good + 1)
    },
    {
      text: "Neutral",
      handler: () => setNeutral(neutral + 1)
    },
    {
      text: "Bad",
      handler: () => setBad(bad + 1)
    }
  ]

  return (
    <>
      <Header text={text} />
      {methods.map(method => {
        return <Button text={method.text} handler={method.handler} />
      })}
      <Stats good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App