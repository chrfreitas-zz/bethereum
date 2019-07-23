import { connect } from 'react-redux';

import { getTransactionDetail } from 'redux/actions';
import TransactionDetail from 'screens/TransactionDetail';

const mapStateToProps = (state, { match }) => ({
  transaction: state.transaction,
  hash: match.params.number,
});

const mapDispatchToProps = dispatch => ({
  getTransactionDetail: hash => dispatch(getTransactionDetail(hash)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
