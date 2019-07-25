export const formatBlock = (block, transactions) => [
  {
    title: 'Difficulty',
    value: block.difficulty,
  },
  {
    title: 'Timestamp',
    value: block.timestamp,
  },
  {
    title: 'Transactions',
    value: transactions.length,
  },
  {
    title: 'Size',
    value: block.size,
  },
  {
    title: 'Hash',
    value: block.hash,
  },
  {
    title: 'Parent Hash',
    value: block.parentHash,
  },
  {
    title: 'Miner By',
    value: block.miner,
  },
];
