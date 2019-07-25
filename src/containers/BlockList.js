import { connect } from 'react-redux';

import { getBlocks } from 'redux/actions';
import BlockList from 'views/BlockList';
import { formatBlocks } from './BlockList.select';

export const mapStateToProps = state => ({
  blocks: formatBlocks(state.blocks),
});

export const mapDispatchToProps = dispatch => ({
  getBlocks: () => dispatch(getBlocks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockList);
