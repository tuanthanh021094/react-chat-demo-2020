import io from 'socket.io-client';

// const URL = 'https://chatapp-room.herokuapp.com';
const URL = process.env.REACT_APP_SOCKET;

const socket = io(URL);

export default socket;