import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import {
    createUserUri,
    loginUserUri,
    getUserUri,
  } from '../configs/url.config';


//get user
function* getUser(req) {
  let res = yield axios.get(getUserUri, {
      params: {
          id: req.data
      }
  });
  yield put({type: 'USER RECEIVED', data: res.data});
}

export function* getUserActionWatcher() {
  yield takeLatest('GET USER', getUser);
}
//create user
function* createUser(req) {
  let res = yield axios.post(createUserUri, req.data);
  yield put({type: 'USER RECEIVED', data: res.data});
}

export function* createUserActionWatcher() {
  yield takeLatest('CREATE USER', createUser);
}

//login user
function* loginUser(req) {
  let res = yield axios.post(loginUserUri, req.data);
  yield put({type: 'USER RECEIVED', data: res.data});
}

export function* loginUserActionWatcher() {
  yield takeLatest('LOGIN USER', loginUser);
}

//logout user
function* logoutUser() {
  yield put({type: 'LOGOUT USER'})
}

export function* logoutUserActionWatcher() {
  yield takeLatest('LOGOUT', logoutUser)
}