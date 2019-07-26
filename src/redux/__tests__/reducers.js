import reducer from '../reducers';
import * as actions from '../actions';

describe('Reducer', () => {
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

  it('should test GET_BLOCKS_SUCCESS action', () => {
    const action = {
      type: actions.GET_BLOCKS_SUCCESS,
      data: [{ hash: 'd41d8cd98f00b204e9800998ecf8427e' }],
    };

    const newState = reducer(undefined, action);

    const expected = {
      ...initialState,
      blocks: {
        values: action.data,
        isLoading: false,
      },
    };

    expect(newState).toEqual(expected);
  });

  it('should test GET_BLOCK_INFO_SUCCESS action', () => {
    const action = {
      type: actions.GET_BLOCK_INFO_SUCCESS,
      data: { hash: 'd41d8cd98f00b204e9800998ecf8427e' },
    };

    const newState = reducer(undefined, action);

    const expected = {
      ...initialState,
      block: {
        values: action.data,
        isLoading: false,
      },
    };

    expect(newState).toEqual(expected);
  });

  it('should test GET_TRANSACTIONS_SUCCESS action', () => {
    const action = {
      type: actions.GET_TRANSACTIONS_SUCCESS,
      data: [{ hash: 'd41d8cd98f00b204e9800998ecf8427e' }],
    };

    const newState = reducer(undefined, action);

    const expected = {
      ...initialState,
      transactions: {
        values: action.data,
        isLoading: false,
      },
    };

    expect(newState).toEqual(expected);
  });

  it('should test GET_TRANSACTION_INFO_SUCCESS action', () => {
    const action = {
      type: actions.GET_TRANSACTION_INFO_SUCCESS,
      data: { hash: 'd41d8cd98f00b204e9800998ecf8427e' },
    };

    const newState = reducer(undefined, action);

    const expected = {
      ...initialState,
      transaction: {
        values: action.data,
        isLoading: false,
      },
    };

    expect(newState).toEqual(expected);
  });
});
