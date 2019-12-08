const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message //`You voted for ${action.data.content}`
    default:
      return state
  }
}

// Jotta muistaisit jatkossa:
// action creator on funktio, joka palauttaa funktion. :)
export const messageChange = (message, duration) => {
  console.log('Notification when adding: ', message)
  const returnFunction = async (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
      message: message,
    })
    setTimeout(
      () => dispatch({ type: 'SET_MESSAGE', message: '' }), 
      (duration * 1000)
    )
  }
  return returnFunction
}

export default notificationReducer