import { call, put } from 'redux-saga/effects';

import * as actions from 'redux/actions';
import Ethereum from 'api/ethereum';
import {
  getBlocksSaga,
  getBlockInfoAndTransactionsSaga,
  getTransactionInfoSaga,
} from '../sagas';

describe('Sagas', () => {
  describe('calls getBlocksSaga', () => {
    const blocks = [];
    const gen = getBlocksSaga();

    it('should call api to get blocks', () => {
      expect(gen.next().value).toEqual(call(Ethereum.getBlocks, 10));
    });

    it('should dispacth success action to send data to reducer', () => {
      expect(gen.next(blocks).value).toEqual(
        put(actions.getBlocksSuccess(blocks))
      );
    });

    it('should be end of generator', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('calls getBlockInfoAndTransactionsSaga', () => {
    const block = {
      transactions: [],
    };
    const action = {
      blockId: 1233,
    };
    const transactions = [];
    const transactionWithEther = [];

    const gen = getBlockInfoAndTransactionsSaga(action);

    it('should call api to get block info by blockId', () => {
      expect(gen.next().value).toEqual(
        call(Ethereum.getBlockInfo, action.blockId)
      );
    });

    it('should call api to get transaction of the block', () => {
      expect(gen.next(block).value).toEqual(
        call(Ethereum.getTransactions, block.transactions)
      );
    });

    it('should dispatch success action to send block info to reducer', () => {
      expect(gen.next(transactions).value).toEqual(
        put(actions.getBlockInfoSuccess(block))
      );
    });

    it('should dispatch success action to send transactions to reducer', () => {
      expect(gen.next(transactionWithEther).value).toEqual(
        put(actions.getTransactionsSuccess(transactionWithEther))
      );
    });

    it('should be end of generator', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });

  describe('calls getTransactionInfoSaga', () => {
    const transaction = {};
    const action = {
      transactionId: 1236,
    };
    const gen = getTransactionInfoSaga(action);

    it('should call api to get transaction info', () => {
      expect(gen.next().value).toEqual(
        call(Ethereum.getTransactionInfo, action.transactionId)
      );
    });

    it('should dispacth success action to send transaction info to reducer', () => {
      expect(gen.next(transaction).value).toEqual(
        put(actions.getTransactionInfoSuccess(transaction))
      );
    });

    it('should be end of generator', () => {
      expect(gen.next().done).toBeTruthy();
    });
  });
});
