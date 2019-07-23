import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
  LOAD_BLOCKS,
  GET_BLOCK_DETAIL,
  loadBlocksSuccess,
  loadBlocksFail,
  getBlockDetailSuccess,
  getBlockDetailFail,
} from 'redux/actions';
import Ethereum from 'api/ethereum';

function* loadBlocksSaga(action) {
  try {
    const blocks = yield call(Ethereum.getLastBlocks, 10);
    yield put(loadBlocksSuccess(blocks));
  } catch {
    yield put(loadBlocksFail());
  }
}

function* getBlockDetailSaga(action) {
  try {
    const block = yield call(Ethereum.getBlock, action.blockNumber);
    yield put(getBlockDetailSuccess(block));
  } catch {
    yield put(getBlockDetailFail());
  }
}

export default function* sagas() {
  yield all([
    takeEvery(LOAD_BLOCKS, loadBlocksSaga),
    takeEvery(GET_BLOCK_DETAIL, getBlockDetailSaga),
  ]);
}
