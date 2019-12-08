import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = (props) => {

  useEffect(() => {
    props.initializeAnecdotes() //connect takes care of dispatching.
  }, [])


  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(
  null,
  { initializeAnecdotes }
)(App)