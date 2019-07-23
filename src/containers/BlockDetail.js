import { connect } from 'react-redux';

import { getBlockInfo } from 'redux/actions';
import BlockDetail from 'screens/BlockDetail';

const mapStateToProps = (state, { match }) => ({
  block: state.block,
  transactions: state.transactions,
  id: match.params.id,
});

const mapDispatchToProps = dispatch => ({
  getBlockInfo: blockNumber => dispatch(getBlockInfo(blockNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);
