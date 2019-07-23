import { connect } from 'react-redux';

import { getBlocks } from 'redux/actions';
import BlockList from 'screens/BlockList';

const mapStateToProps = state => ({
  blocks: state.blocks,
});

const mapDispatchToProps = dispatch => ({
  getBlocks: () => dispatch(getBlocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
