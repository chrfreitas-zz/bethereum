import { connect } from 'react-redux';

import { getTransactionInfo } from 'redux/actions';
import TransactionDetail from 'screens/TransactionDetail';

const mapStateToProps = (state, { match }) => ({
  transaction: state.transaction,
  id: match.params.id,
});

const mapDispatchToProps = dispatch => ({
  getTransactionInfo: id => dispatch(getTransactionInfo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
