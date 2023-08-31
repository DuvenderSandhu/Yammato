const LoggedUser = (state = "", action) => {
  if (action.type === 'LoggedUser') {
    return action.payload
  }
  else {
    return state
  }
}


export default LoggedUser;