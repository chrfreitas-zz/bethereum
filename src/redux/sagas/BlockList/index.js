import { call, put, takeEvery } from 'redux-saga/effects';

import {
  LOAD_BLOCKS,
  loadBlocksSuccess,
  loadBlocksFail,
} from 'redux/actions/BlockList';
import Ethereum from 'api/ethereum';

function* loadBlocksSaga(action) {
  try {
    const blocks = yield call(Ethereum.getLastBlocks, 10);
    yield put(loadBlocksSuccess(blocks));
  } catch {
    yield put(loadBlocksFail());
  }
}

export default [takeEvery(LOAD_BLOCKS, loadBlocksSaga)];
