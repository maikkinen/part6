import React from 'react'

const Anecdote = ({ anecdote, vote }) => {
  //console.log("anecdote content", anecdote.content)
  //console.log("anecdote votes: ", anecdote.votes)
  return (
    <div>
      {anecdote.content} has {anecdote.votes} votes
      <button onClick={vote}>vote</button>
    </div>
  )
}

export default Anecdote