export const LOAD_BLOCKS = 'LOAD_BLOCKS';
export const LOAD_BLOCKS_SUCCESS = 'LOAD_BLOCKS_SUCCESS';

export const loadBlocks = () => ({
  type: 'LOAD_BLOCKS',
});

export const loadBlocksSuccess = data => ({
  type: 'LOAD_BLOCKS_SUCCESS',
  data: data.blocks,
});