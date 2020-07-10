import { combineReducers } from 'redux';

import roomReducer from './room.reducer';
import userReducer from './use.reducer';
import messageReducer from './message.reducer';

const rootReducer = combineReducers({
    rooms: roomReducer,
    user: userReducer,
    messages: messageReducer
});

export default rootReducer;