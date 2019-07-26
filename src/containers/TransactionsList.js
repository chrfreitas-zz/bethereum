import { connect } from 'react-redux';

import { getTransactions } from 'redux/actions';
import TransactionsList from 'views/TransactionsList';
import { formatTransactions } from './TransactionsList.select';

export const mapStateToProps = (state, { match }) => ({
  transactions: formatTransactions(
    state.transactions.values,
    match.params.blockId
  ),
  isLoading: state.transactions.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  getTransactions: blockId => dispatch(getTransactions(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionsList);
