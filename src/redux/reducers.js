import {
  GET_BLOCKS_SUCCESS,
  GET_BLOCK_INFO_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTION_INFO_SUCCESS,
} from 'redux/actions';

const initialState = {
  blocks: [],
  block: {},
  transactions: [],
  transaction: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.data,
      };
    case GET_BLOCK_INFO_SUCCESS:
      return {
        ...state,
        block: action.data,
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.data,
      };
    case GET_TRANSACTION_INFO_SUCCESS:
      return {
        ...state,
        transaction: action.data,
      };
    default:
      return state;
  }
};
