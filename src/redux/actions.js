export const GET_BLOCKS = 'GET_BLOCKS';
export const GET_BLOCKS_SUCCESS = 'GET_BLOCKS_SUCCESS';
export const GET_BLOCKS_FAIL = 'GET_BLOCKS_FAIL';

export const GET_BLOCK_INFO = 'GET_BLOCK_INFO';
export const GET_BLOCK_INFO_SUCCESS = 'GET_BLOCK_INFO_SUCCESS';
export const GET_BLOCK_INFO_FAIL = 'GET_BLOCK_INFO_FAIL';

export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const GET_TRANSACTIONS_SUCCESS = 'GET_TRANSACTIONS_SUCCESS';
export const GET_TRANSACTIONS_FAIL = 'GET_TRANSACTIONS_FAIL';

export const GET_TRANSACTION_INFO = 'GET_TRANSACTION_INFO';
export const GET_TRANSACTION_INFO_SUCCESS = 'GET_TRANSACTION_INFO_SUCCESS';
export const GET_TRANSACTION_INFO_FAIL = 'GET_TRANSACTION_INFO_FAIL';

export const getBlocks = () => ({
  type: GET_BLOCKS,
});

export const getBlocksSuccess = data => ({
  type: GET_BLOCKS_SUCCESS,
  data,
});

export const getBlocksFail = () => ({
  type: GET_BLOCKS_FAIL,
});

export const getBlockInfo = data => ({
  type: GET_BLOCK_INFO,
  data,
});

export const getBlockInfoSuccess = data => ({
  type: GET_BLOCK_INFO_SUCCESS,
  data,
});

export const getBlockInfoFail = () => ({
  type: GET_BLOCK_INFO_FAIL,
});

export const getTransactions = data => ({
  type: GET_TRANSACTIONS,
  data,
});

export const getTransactionsSuccess = data => ({
  type: GET_TRANSACTIONS_SUCCESS,
  data,
});

export const getTransactionsFail = () => ({
  type: GET_TRANSACTIONS_FAIL,
});

export const getTransactionInfo = () => ({
  type: GET_TRANSACTION_INFO,
});

export const getTransactionInfoSuccess = data => ({
  type: GET_TRANSACTION_INFO_SUCCESS,
  data,
});

export const getTransactionInfoFail = () => ({
  type: GET_TRANSACTION_INFO_FAIL,
});
