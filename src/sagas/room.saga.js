import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import {
  createRoomUri,
  getRoomUri
} from '../configs/url.config';

//get room action
function* getRoom() {
  let res = yield axios.get(getRoomUri);
  yield put({ type: 'ROOM RECEIVED', data: res.data })
}

export function* actionWatcher() {
  yield takeLatest('GET ROOM', getRoom);
}

//create room action
function* createRoom(disp) {
  let res = yield axios.post(createRoomUri, {name: disp.data});
  yield put({type: 'ROOM RECEIVED', data: res.data})
}

export function* createRoomActionWatcher() {
  yield takeLatest('CREATE ROOM', createRoom)
}