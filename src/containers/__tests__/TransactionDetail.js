import { mapStateToProps, mapDispatchToProps } from '../TransactionDetail';

describe('TransactionDetail Container', () => {
  it('returns object the state turned in props', () => {
    const state = {
      blocks: {
        values: [],
      },
      transaction: {
        values: {},
        isLoading: false,
      },
    };

    const props = {
      match: {
        params: {
          transactionId: 1,
        },
      },
    };

    const expected = {
      transaction: [
        {
          title: 'Transaction Hash',
          value: undefined,
        },
        {
          title: 'Block Number',
          value: undefined,
        },
        {
          title: 'From',
          value: undefined,
        },
        {
          title: 'To',
          value: undefined,
        },
        {
          title: 'Gas',
          value: undefined,
        },
        {
          title: 'Transaction Index',
          value: undefined,
        },
        {
          title: 'Ether',
          value: '0',
        },
      ],
      transactionId: props.match.params.transactionId,
      isLoading: false,
    };

    expect(mapStateToProps(state, props)).toEqual(expected);
  });

  it('returns getTransactionInfo to dispatch action', () => {
    const props = mapDispatchToProps(() => {});
    expect(props.getTransactionInfo).toBeDefined();
  });
});
