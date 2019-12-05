const initialState = ''

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message //`You voted for ${action.data.content}`
    default: 
      return state
  }
}

export const messageChange = (message) => {
  console.log('Notification when adding: ', message)
  return {
    type: 'SET_MESSAGE',
    message: message,
  }
}

export default notificationReducer