import { connect } from 'react-redux';

import BlockList from 'screens/BlockList';

const mapStateToProps = state => ({
  todo: state.blocks,
});

const mapDispatchToProps = dispatch => ({
  loadBlocks: () => dispatch({ type: 'LOAD_BLOCKS' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
