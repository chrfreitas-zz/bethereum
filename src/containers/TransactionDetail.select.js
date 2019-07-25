export const formatTransaction = transaction => [
  {
    title: 'Timestamp',
    value: transaction.timestamp,
  },

  {
    title: 'Hash',
    value: transaction.hash,
  },
];
