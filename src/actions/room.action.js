import {
  GET_ROOM,
  CREATE_ROOM
} from '../constants/roomActionType';

//get all room
export const getRoom = () => ({
  type: GET_ROOM,
});

//create room
export const createRoom = (value) => ({
  type: CREATE_ROOM,
  data: value
})
