import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
  GET_BLOCKS,
  GET_BLOCK_INFO,
  GET_TRANSACTIONS,
  GET_TRANSACTION_INFO,
  getBlocksSuccess,
  getBlocksFail,
  getBlockInfoSuccess,
  getBlockInfoFail,
  getTransactionsSuccess,
  getTransactionsFail,
  getTransactionInfoSuccess,
  getTransactionInfoFail,
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

function* getBlockInfoAndTransactionsSaga(action) {
  try {
    const block = yield call(Ethereum.getBlock, action.blockId);
    const transactions = yield call(
      Ethereum.getTransactionsInfo,
      block.transactions
    );

    const transactionWithEther = transactions.filter(
      transaction => Number(transaction.value) > 0
    );

    yield put(getBlockInfoSuccess(block));
    yield put(getTransactionsSuccess(transactionWithEther));
  } catch {
    yield put(getBlockInfoFail());
    yield put(getTransactionsFail());
  }
}

function* getTransactionInfoSaga(action) {
  try {
    const transaction = yield call(
      Ethereum.getTransactionInfo,
      action.transactionId
    );

    yield put(getTransactionInfoSuccess(transaction));
  } catch {
    yield put(getTransactionInfoFail());
  }
}

export default function* sagas() {
  yield all([
    takeEvery(GET_BLOCKS, getBlocksSaga),
    takeEvery(GET_BLOCK_INFO, getBlockInfoAndTransactionsSaga),
    takeEvery(GET_TRANSACTIONS, getBlockInfoAndTransactionsSaga),
    takeEvery(GET_TRANSACTION_INFO, getTransactionInfoSaga),
  ]);
}
