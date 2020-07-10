const roomReducer = (state = [], action) => {
  switch (action.type) {
      case 'GET ROOM': return state;
      case 'ROOM RECEIVED': return action.data;
      default:
          return state;
  }
}

export default roomReducer;