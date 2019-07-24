import * as actions from '../actions';

describe('Actions', () => {
  it('calls getBlocks and return just type in an object', () => {
    const expected = {
      type: actions.GET_BLOCKS,
    };

    expect(actions.getBlocks()).toEqual(expected);
  });

  it('calls getBlocksSuccess and return type and data in an object', () => {
    const data = [];
    const expected = {
      type: actions.GET_BLOCKS_SUCCESS,
      data,
    };

    expect(actions.getBlocksSuccess(data)).toEqual(expected);
  });

  it('calls getBlocksFail and return type in an object', () => {
    const expected = {
      type: actions.GET_BLOCKS_FAIL,
    };

    expect(actions.getBlocksFail()).toEqual(expected);
  });

  it('calls getBlockInfo and return type and blockId in an object', () => {
    const blockId = 354682;
    const expected = {
      type: actions.GET_BLOCK_INFO,
      blockId,
    };

    expect(actions.getBlockInfo(blockId)).toEqual(expected);
  });

  it('calls getBlockInfoSuccess and return type and data in an object', () => {
    const data = {};
    const expected = {
      type: actions.GET_BLOCK_INFO_SUCCESS,
      data,
    };

    expect(actions.getBlockInfoSuccess(data)).toEqual(expected);
  });

  it('calls getBlockInfoFail and return type in an object', () => {
    const expected = {
      type: actions.GET_BLOCK_INFO_FAIL,
    };

    expect(actions.getBlockInfoFail()).toEqual(expected);
  });

  it('calls getTransactions and return type and blockId in an object', () => {
    const blockId = 767837;
    const expected = {
      type: actions.GET_TRANSACTIONS,
      blockId,
    };

    expect(actions.getTransactions(blockId)).toEqual(expected);
  });

  it('calls getTransactionsSuccess and return type and data in an object', () => {
    const data = [];
    const expected = {
      type: actions.GET_TRANSACTIONS_SUCCESS,
      data,
    };

    expect(actions.getTransactionsSuccess(data)).toEqual(expected);
  });

  it('calls getTransactionsFail and return type in an object', () => {
    const expected = {
      type: actions.GET_TRANSACTIONS_FAIL,
    };

    expect(actions.getTransactionsFail()).toEqual(expected);
  });

  it('calls getTransactionInfo and return type and transactionId in an object', () => {
    const transactionId = 'd41d8cd98f00b204e9800998ecf8427e';
    const expected = {
      type: actions.GET_TRANSACTION_INFO,
      transactionId,
    };

    expect(actions.getTransactionInfo(transactionId)).toEqual(expected);
  });

  it('calls getTransactionInfoSuccess and return type and data in an object', () => {
    const data = [];
    const expected = {
      type: actions.GET_TRANSACTION_INFO_SUCCESS,
      data,
    };

    expect(actions.getTransactionInfoSuccess(data)).toEqual(expected);
  });

  it('calls getTransactionInfoFail and return type in an object', () => {
    const expected = {
      type: actions.GET_TRANSACTION_INFO_FAIL,
    };

    expect(actions.getTransactionInfoFail()).toEqual(expected);
  });
});
