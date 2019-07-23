import { all } from 'redux-saga/effects';

import BlockList from 'redux/sagas/BlockList';

export default function* rootSaga() {
  yield all([...BlockList]);
}
