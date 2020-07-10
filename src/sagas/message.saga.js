import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  getMessage,
  sendMessage
} from '../configs/url.config';

//get message action
function* getMessages(req) {
  let res = yield axios.get(getMessage, {
    params: {
      name: req.data
    }
  });
  yield put({ type: 'MESSAGE RECEIVED', data: res.data })
}

export function* getMessageActionWatcher() {
  yield takeLatest('GET MESSAGE', getMessages);
}

//create message action
function* sendMessages(req) {
  let res = yield axios.post(sendMessage, req.data);
  yield put({type: 'MESSAGE RECEIVED', data: res.data})
}

export function* sendMessageActionWatcher() {
  yield takeLatest('SEND MESSAGE', sendMessages)
}