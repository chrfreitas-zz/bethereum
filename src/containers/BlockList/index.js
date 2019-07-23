import { connect } from 'react-redux';

import { loadBlocks } from 'redux/actions';
import BlockList from 'screens/BlockList';

const mapStateToProps = state => ({
  blocks: state.blocks,
});

const mapDispatchToProps = dispatch => ({
  loadBlocks: () => dispatch(loadBlocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
