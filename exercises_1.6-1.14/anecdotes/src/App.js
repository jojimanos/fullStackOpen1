import { useState } from 'react'
import Button from "./Button"
import Anecdote from './Anecdote'
import MostVoted from './MostVoted'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const templateArray = new Array(8).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(templateArray)

  console.log(votes)

  function handleVotes() {
    const nextVotes = votes.map((vote, index) => { if (index === selected) { return vote + 1 } else { return vote } })
    setVotes(nextVotes)
  }

  let mostVoted = ""

  if (Math.max(...votes) === 0)
  {mostVoted = "No votes yet"}
  else { mostVoted = anecdotes[votes.indexOf(Math.max(...votes))]}

  return (
    <>
      <div>
        <Anecdote anecdote={anecdotes[selected]} />
      </div>
      <p>{votes[selected]}</p>
      <Button text={"Vote"} handler={handleVotes} />
      <Button text={"Next"} handler={() => { setSelected(Math.floor(Math.random() * 8)) }} />
      <div>
        <MostVoted anecdote={mostVoted} />
      </div>
    </>
  )
}

export default App