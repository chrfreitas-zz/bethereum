import { connect } from 'react-redux';

import { getTransactionInfo } from 'redux/actions';
import TransactionDetail from 'views/TransactionDetail';
import { formatTransaction } from './TransactionDetail.select';

export const mapStateToProps = (state, { match }) => ({
  transaction: formatTransaction(state.transaction),
  transactionId: match.params.transactionId,
});

export const mapDispatchToProps = dispatch => ({
  getTransactionInfo: transactionId =>
    dispatch(getTransactionInfo(transactionId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
