import { connect } from 'react-redux';

import { getTransactions } from 'redux/actions';
import TransactionsList from 'screens/TransactionsList';

const mapStateToProps = (state, { match }) => ({
  transactions: state.transactions,
  blockId: match.params.blockId,
});

const mapDispatchToProps = dispatch => ({
  getTransactions: blockId => dispatch(getTransactions(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
