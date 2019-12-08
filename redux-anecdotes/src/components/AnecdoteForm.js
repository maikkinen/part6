import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { messageChange } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {
  //console.log(createAnecdote) //this is an action creator
  //console.log(props.createAnecdote) //function formed by connect, incl. dispatch

  const addAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.content.value
    event.target.content.value = ''
    // const newAnecdote = await anecdoteService.createNew(anecdote)
    props.createAnecdote(anecdote)
    
    props.messageChange('You added anecdote "' + anecdote + '"')
    console.log('You added anecdote "' + anecdote + '"')
    
    setTimeout(() => {
      props.messageChange('')
    }, 3000)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(e) => addAnecdote(e)}>
        <input name='content' />
        <button type='submit'>create</button>
      </form>
    </div>
  )
}


//Tämä on vain pidempi tapa kirjoittaa mapDTP = { action creator(it). }
const mapDispatchToProps = dispatch => {
  return {
    createAnecdote: value => {
      dispatch(createAnecdote(value))
    },
    messageChange: value => {
      dispatch(messageChange(value))
    }
    
  }
}

export default connect(
  null,
  mapDispatchToProps
)(NewAnecdote)