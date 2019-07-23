import { LOAD_BLOCKS_SUCCESS, GET_BLOCK_DETAIL_SUCCESS } from 'redux/actions';

const initialState = {
  blocks: [],
  block: {},
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.data,
      };
    case GET_BLOCK_DETAIL_SUCCESS:
      return {
        ...state,
        block: action.data.block,
        transactions: action.data.transactions,
      };
    default:
      return state;
  }
};
