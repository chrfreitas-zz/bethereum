export const GET_BLOCKS = 'GET_BLOCKS';
export const GET_BLOCKS_SUCCESS = 'GET_BLOCKS_SUCCESS';
export const GET_BLOCKS_FAIL = 'GET_BLOCKS_SUCCESS';

export const GET_BLOCK_INFO = 'GET_BLOCK_INFO';
export const GET_BLOCK_INFO_SUCCESS = 'GET_BLOCK_INFO_SUCCESS';
export const GET_BLOCK_INFO_FAIL = 'GET_BLOCK_INFO_FAIL';

export const GET_TRANSACTION_DETAIL = 'GET_TRANSACTION_DETAIL';

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

export const getBlockInfo = blockNumber => ({
  type: GET_BLOCK_INFO,
  blockNumber,
});

export const getBlockInfoSuccess = data => ({
  type: GET_BLOCK_INFO_SUCCESS,
  data,
});

export const getBlockInfoFail = () => ({
  type: GET_BLOCK_INFO_FAIL,
});

export const getTransactionDetail = hash => ({
  type: GET_TRANSACTION_DETAIL,
  hash,
});
