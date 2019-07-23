import { combineReducers } from 'redux';

import BlockList from 'redux/reducers/BlockList';

export default combineReducers({
  blocks: BlockList,
});
