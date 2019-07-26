export const formatBlock = (block, transactions) => [
  {
    title: 'Hash',
    value: block.hash,
  },
  {
    title: 'Difficulty',
    value: block.difficulty,
  },
  {
    title: 'Miner By',
    value: block.miner,
  },
  {
    title: 'Transactions',
    value: transactions.length,
    route: `/blocks/${block.hash}/transactions/`,
  },
  {
    title: 'Timestamp',
    value: block.timestamp,
  },
  {
    title: 'Size',
    value: block.size,
  },
  {
    title: 'Parent Hash',
    value: block.parentHash,
  },
];
