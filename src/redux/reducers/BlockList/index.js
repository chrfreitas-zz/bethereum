import { LOAD_BLOCKS_SUCCESS } from 'redux/actions/BlockList';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOCKS_SUCCESS:
      return [...state, ...action.data];
    default:
      return state;
  }
};
