import {
  GET_USER,
  CREATE_USER,
  LOGIN_USER,
  LOGOUT
} from '../constants/userActionType';

//get user
export const getUser = (data) => ({
  type: GET_USER,
  data: data,
});

//create user
export const createUser = (data) => ({
  type: CREATE_USER,
  data: data,
})

//user login
export const loginUser = (data) => ({
  type: LOGIN_USER,
  data: data,
});

export const logoutUser = () => ({
  type: LOGOUT
})