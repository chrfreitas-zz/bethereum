import { connect } from 'react-redux';

import TransactionsList from 'screens/TransactionsList';

const mapStateToProps = state => ({
  transactions: state.transactions,
});

export default connect(
  mapStateToProps,
  null
)(TransactionsList);
