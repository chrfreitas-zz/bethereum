export const formatTransactions = (transactions, blockId) =>
  transactions.map(transaction => ({
    text: transaction.hash,
    route: `/blocks/${blockId}/transactions/${transaction.hash}`,
  }));
