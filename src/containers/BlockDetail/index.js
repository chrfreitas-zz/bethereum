import { connect } from 'react-redux';

import { getBlockDetail } from 'redux/actions';
import BlockDetail from 'screens/BlockDetail';

const mapStateToProps = (state, props) => ({
  block: state.block,
  transactions: state.transactions,
  match: props.match,
});

const mapDispatchToProps = dispatch => ({
  getBlockDetail: blockNumber => dispatch(getBlockDetail(blockNumber)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);
