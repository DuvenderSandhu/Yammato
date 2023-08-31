export const LoggedUser = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'LoggedUser',
      payload: item
    })
  }
}



export const addCart = (item) => {
  return (dispatch) => {
    dispatch({
      type: 'addCart',
      payload: item
    })
  }
}

export const showSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'showSuccess',
      payload: data
    })
  }
}

export const showError = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'showError',
      payload: data
    })
  }
}

export const showWarning = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'showWarning',
      payload: data
    })
  }
}