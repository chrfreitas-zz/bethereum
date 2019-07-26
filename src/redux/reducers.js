import {
  GET_BLOCKS_SUCCESS,
  GET_BLOCK_INFO_SUCCESS,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTION_INFO_SUCCESS,
} from 'redux/actions';

const initialState = {
  blocks: {
    values: [],
    isLoading: true,
  },
  block: {
    values: {},
    isLoading: true,
  },
  transactions: {
    values: [],
    isLoading: true,
  },
  transaction: {
    values: {},
    isLoading: true,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: {
          values: action.data,
          isLoading: false,
        },
      };
    case GET_BLOCK_INFO_SUCCESS:
      return {
        ...state,
        block: {
          values: action.data,
          isLoading: false,
        },
      };
    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: {
          values: action.data,
          isLoading: false,
        },
      };
    case GET_TRANSACTION_INFO_SUCCESS:
      return {
        ...state,
        transaction: {
          values: action.data,
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
