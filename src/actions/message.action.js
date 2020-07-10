import {
  GET_MESSAGE,
  SEND_MESSAGE
} from '../constants/messageActionType';

//get message
export const getMessage = (data) => ({
  type: GET_MESSAGE,
  data: data
})

//send message
export const sendMessage = (data) => ({
  type: SEND_MESSAGE,
  data: data
})