import { getTransactionInfo } from 'redux/actions';
import { mapStateToProps, mapDispatchToProps } from '../TransactionDetail';

describe('TransactionDetail Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      blocks: {},
    };

    const props = {
      match: {
        params: {
          transactionId: 1,
        },
      },
    };

    const expected = {
      transaction: state.transaction,
      transactionId: props.match.params.transactionId,
    };

    expect(mapStateToProps(state, props)).toEqual(expected);
  });

  it('returns function that dispatch actions', () => {
    const expected = {
      getTransactionInfo: transactionId => getTransactionInfo(transactionId),
    };

    const props = mapDispatchToProps(() => {});

    expect(props).toEqual(expected);
  });
});
