const WarningReducers = (state = false, action) => {
  if (action.type === 'showWarning') {
    return action.payload
  }
  else {
    return state
  }
}


export default WarningReducers;