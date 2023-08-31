const ErrorReducers = (state = false, action) => {
  if (action.type === 'showError') {
    return action.payload
  }
  else {
    return state
  }
}


export default ErrorReducers;