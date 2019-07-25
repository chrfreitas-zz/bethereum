import { connect } from 'react-redux';

import { getTransactionInfo } from 'redux/actions';
import TransactionDetail from 'views/TransactionDetail';

export const mapStateToProps = (state, { match }) => ({
  transaction: state.transaction,
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
