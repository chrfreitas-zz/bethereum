import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_BLOCKS,
  GET_BLOCK_INFO,
  getBlocksSuccess,
  getBlocksFail,
  getBlockInfoSuccess,
  getBlockInfoFail,
} from 'redux/actions';
import Ethereum from 'api/ethereum';

function* getBlocksSaga(action) {
  try {
    const blocks = yield call(Ethereum.getLastBlocks, 10);
    yield put(getBlocksSuccess(blocks));
  } catch {
    yield put(getBlocksFail());
  }
}

function* getBlockInfoSaga(action) {
  try {
    const block = yield call(Ethereum.getBlock, action.blockNumber);
    const transactions = yield call(
      Ethereum.getTransactionsInfo,
      block.transactions
    );

    const transactionWithEther = transactions.filter(
      transaction => Number(transaction.value) > 0
    );

    yield put(
      getBlockInfoSuccess({ block, transactions: transactionWithEther })
    );
  } catch {
    yield put(getBlockInfoFail());
  }
}

export default function* sagas() {
  yield all([
    takeEvery(GET_BLOCKS, getBlocksSaga),
    takeEvery(GET_BLOCK_INFO, getBlockInfoSaga),
  ]);
}
