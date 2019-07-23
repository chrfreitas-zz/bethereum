import { LOAD_BLOCKS_SUCCESS } from 'redux/actions';

const initialState = {
  blocks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOCKS_SUCCESS:
      return {
        ...state,
        blocks: action.data,
      };
    default:
      return state;
  }
};
