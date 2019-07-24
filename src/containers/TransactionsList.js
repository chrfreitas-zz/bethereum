import { connect } from 'react-redux';

import { getTransactions } from 'redux/actions';
import TransactionsList from 'screens/TransactionsList';

const mapStateToProps = (state, { match }) => ({
  transactions: state.transactions,
  id: match.params.id,
});

const mapDispatchToProps = dispatch => ({
  getTransactions: id => dispatch(getTransactions(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
