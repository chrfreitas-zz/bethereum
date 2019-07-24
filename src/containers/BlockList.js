import { connect } from 'react-redux';

import { getBlocks } from 'redux/actions';
import BlockList from 'screens/BlockList';

export const mapStateToProps = state => ({
  blocks: state.blocks,
});

export const mapDispatchToProps = dispatch => ({
  getBlocks: () => dispatch(getBlocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
