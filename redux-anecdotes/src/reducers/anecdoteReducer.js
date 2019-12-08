import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  //notes: [ anek here], filter: 'IMPORTANT,
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => { //As we've got no backend in part 6.
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

export const voteUp = (anecdote) => {
  return async dispatch => {
    const votedAnec = { ...anecdote, votes: anecdote.votes + 1 }
    const NvotedAnec = await anecdoteService.vote(votedAnec)
    dispatch({
      type: 'VOTE-UP',
      data: NvotedAnec,
    })
  }
}

export const createAnecdote = content => {
  console.log(content)
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE-NEW',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}

/* Remember bae: 'action' on itse asiassa objekti, mutta Reduxin konventio on
 * nimetä ne hämäävästi "funktioiksi". Objekti kuitenkin, loogisesti, pitää sisällään
 * siitä, mikä on muuttunut, ja minkä tyyppisestä muutoksesta on kyse.
 */

//This thing takes care of the anecdotes: showing the list, voting up and creating new ones.

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE-UP':
      const updAnecList = state.map(anec => anec.id !== action.data.id ? anec : action.data)
      return updAnecList
    case 'CREATE-NEW':
      const newAnec = action.data
      const newState = state.concat(newAnec)
      return newState
    case 'INIT_NOTES':
      return action.data
    default:
      return state
  }
}

export default anecdoteReducer