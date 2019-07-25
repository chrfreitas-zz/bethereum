export const formatBlocks = blocks =>
  blocks.map(block => ({
    text: block.hash,
    route: `/blocks/${block.hash}`,
  }));
