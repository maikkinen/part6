import React from 'react'
import { connect } from 'react-redux'
import { voteUp } from '../reducers/anecdoteReducer'
import { messageChange } from '../reducers/notificationReducer'
import Anecdote from './Anecdote'

const Anecdotes = (props) => {

  const vote = (anecdote, event) => {
    console.log('vote', anecdote)
    event.preventDefault()
    props.voteUp(anecdote)
    /* Storen dispatch-funktiota ei enää tarvitse kutsua,
     * sillä connect on muokannut action creatorin toggleImportanceOf
     * sellaiseen muotoon, joka sisältää dispatchauksen.
     */

    //Goals:
    //props.setNotification(`you voted '${anecdote.content}'`, 10)

    props.messageChange(`You voted for '${anecdote.content}'`, 3)

  }

  return (
    <ul>
      {console.log("props anecdotes:", props.anecdotes)}
      {props.anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id} // Tässä return vain yksi elementti...kai?
          anecdote={anecdote}
          vote={(e) => vote(anecdote, e)} />
      )}
    </ul>
  )
}

const mapStateToProps = (state) => {
  console.log("state is:", state)
  return {
    anecdotes: state.anecdotes,
    notification: state.notification,
  }
}

const mapDispatchToProps = {
  voteUp,
  messageChange
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Anecdotes)

export default ConnectedAnecdotes