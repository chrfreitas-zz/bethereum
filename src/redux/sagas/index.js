import { takeEvery } from 'redux-saga/effects';

const handleNewMessage = function* handleNewMessage(params) {
  yield takeEvery('LOAD_BLOCKS', action => console.log(action));
};

export default handleNewMessage;
