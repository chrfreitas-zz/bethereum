import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as actions from 'redux/actions';
import Ethereum from 'api/ethereum';

function* getBlocksSaga(action) {
  try {
    const blocks = yield call(Ethereum.getBlocks, 10);
    yield put(actions.getBlocksSuccess(blocks));
  } catch {
    yield put(actions.getBlocksFail());
  }
}

function* getBlockInfoAndTransactionsSaga(action) {
  try {
    const block = yield call(Ethereum.getBlockInfo, action.blockId);
    const transactions = yield call(
      Ethereum.getTransactions,
      block.transactions
    );

    const transactionWithEther = transactions.filter(
      transaction => Number(transaction.value) > 0
    );

    yield put(actions.getBlockInfoSuccess(block));
    yield put(actions.getTransactionsSuccess(transactionWithEther));
  } catch {
    yield put(actions.getBlockInfoFail());
    yield put(actions.getTransactionsFail());
  }
}

function* getTransactionInfoSaga(action) {
  try {
    const transaction = yield call(
      Ethereum.getTransactionInfo,
      action.transactionId
    );

    yield put(actions.getTransactionInfoSuccess(transaction));
  } catch {
    yield put(actions.getTransactionInfoFail());
  }
}

export default function* sagas() {
  yield all([
    takeEvery(actions.GET_BLOCKS, getBlocksSaga),
    takeEvery(actions.GET_BLOCK_INFO, getBlockInfoAndTransactionsSaga),
    takeEvery(actions.GET_TRANSACTIONS, getBlockInfoAndTransactionsSaga),
    takeEvery(actions.GET_TRANSACTION_INFO, getTransactionInfoSaga),
  ]);
}
