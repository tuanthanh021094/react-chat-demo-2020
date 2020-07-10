const messageReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET MESSAGE': return state;
    case 'MESSAGE RECEIVED': return action.data;
    default:
      return state
  }
}

export default messageReducer;