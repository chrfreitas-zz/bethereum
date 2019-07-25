import { connect } from 'react-redux';

import { getBlockInfo } from 'redux/actions';
import BlockDetail from 'views/BlockDetail';
import { formatBlock } from './BlockDetail.select';

export const mapStateToProps = (state, { match }) => ({
  block: formatBlock(state.block.values, state.transactions.values),
  blockId: match.params.blockId,
  isLoading: state.block.isLoading,
});

export const mapDispatchToProps = dispatch => ({
  getBlockInfo: blockId => dispatch(getBlockInfo(blockId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlockDetail);
