// This reducer is to manage filtering. 
const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

// Supporting the filterReducer. This kind of stuff is called 'action creator' functions.
export const filterChange = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}