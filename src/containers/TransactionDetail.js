import { connect } from 'react-redux';

import { getTransactionDetail } from 'redux/actions';
import TransactionDetail from 'screens/TransactionDetail';

const mapStateToProps = (state, { match }) => ({
  transaction: state.transaction,
  id: match.params.id,
});

const mapDispatchToProps = dispatch => ({
  getTransactionDetail: id => dispatch(getTransactionDetail(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionDetail);
