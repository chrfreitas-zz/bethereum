import { connect } from 'react-redux';

import { getBlockInfo } from 'redux/actions';
import BlockDetail from 'views/BlockDetail';
import { formatBlock } from './BlockDetail.select';

export const mapStateToProps = (state, { match }) => ({
  block: formatBlock(state.block, state.transactions),
  blockId: match.params.blockId,
});

export const mapDispatchToProps = dispatch => ({
  getBlockInfo: blockId => dispatch(getBlockInfo(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);
