import { connect } from 'react-redux';

import { getTransactionInfo } from 'redux/actions';
import TransactionDetail from 'views/TransactionDetail';
import { formatTransaction } from './TransactionDetail.select';

export const mapStateToProps = (state, { match }) => ({
  transaction: formatTransaction(state.transaction.values),
  transactionId: match.params.transactionId,
  isLoading: state.transaction.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  getTransactionInfo: transactionId =>
    dispatch(getTransactionInfo(transactionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
