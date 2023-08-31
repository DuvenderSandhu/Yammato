const SuccessReducers = (state = false, action) => {
  if (action.type === 'showSuccess') {
    return action.payload
  }
  else {
    return state
  }
}


export default SuccessReducers;