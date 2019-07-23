import { connect } from 'react-redux';

import { getBlockDetail } from 'redux/actions';
import BlockDetail from 'screens/BlockDetail';

const mapStateToProps = (state, { match }) => ({
  block: state.block,
  transactions: state.transactions,
  id: match.params.id,
});

const mapDispatchToProps = dispatch => ({
  getBlockDetail: blockNumber => dispatch(getBlockDetail(blockNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);
