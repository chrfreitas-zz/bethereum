import { connect } from 'react-redux';

import { getTransactions } from 'redux/actions';
import TransactionsList from 'views/TransactionsList';

export const mapStateToProps = (state, { match }) => ({
  transactions: state.transactions,
  blockId: match.params.blockId,
});

export const mapDispatchToProps = dispatch => ({
  getTransactions: blockId => dispatch(getTransactions(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
