import { connect } from 'react-redux';

import { getBlocks } from 'redux/actions';
import BlockList from 'screens/BlockList';

export const mapStateToProps = state => ({
  blocks: state.blocks.map(block => ({
    text: block.hash,
    route: `/block/${block.hash}`,
  })),
});

export const mapDispatchToProps = dispatch => ({
  getBlocks: () => dispatch(getBlocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
