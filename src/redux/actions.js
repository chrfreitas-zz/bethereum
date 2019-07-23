export const LOAD_BLOCKS = 'LOAD_BLOCKS';
export const LOAD_BLOCKS_SUCCESS = 'LOAD_BLOCKS_SUCCESS';
export const LOAD_BLOCKS_FAIL = 'LOAD_BLOCKS_SUCCESS';

export const GET_BLOCK_DETAIL = 'GET_BLOCK_DETAIL';
export const GET_BLOCK_DETAIL_SUCCESS = 'GET_BLOCK_DETAIL_SUCCESS';
export const GET_BLOCK_DETAIL_FAIL = 'GET_BLOCK_DETAIL_FAIL';

export const GET_TRANSACTION_DETAIL = 'GET_TRANSACTION_DETAIL';

export const loadBlocks = () => ({
  type: LOAD_BLOCKS,
});

export const loadBlocksSuccess = data => ({
  type: LOAD_BLOCKS_SUCCESS,
  data,
});

export const loadBlocksFail = () => ({
  type: LOAD_BLOCKS_FAIL,
});

export const getBlockDetail = blockNumber => ({
  type: GET_BLOCK_DETAIL,
  blockNumber,
});

export const getBlockDetailSuccess = data => ({
  type: GET_BLOCK_DETAIL_SUCCESS,
  data,
});

export const getBlockDetailFail = () => ({
  type: GET_BLOCK_DETAIL_FAIL,
});

export const getTransactionDetail = hash => ({
  type: GET_TRANSACTION_DETAIL,
  hash,
});
