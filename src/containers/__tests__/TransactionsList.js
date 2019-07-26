import { mapStateToProps, mapDispatchToProps } from '../TransactionsList';

describe('TransactionsList Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      transactions: {
        values: [],
        isLoading: false,
      },
    };

    const props = {
      match: {
        params: {
          blockId: 2267,
        },
      },
    };

    const expected = {
      transactions: state.transactions.values,
      isLoading: false,
    };

    expect(mapStateToProps(state, props)).toEqual(expected);
  });

  it('returns getTransactions to dispatch action', () => {
    const props = mapDispatchToProps(() => {});
    expect(props.getTransactions).toBeDefined();
  });
});
