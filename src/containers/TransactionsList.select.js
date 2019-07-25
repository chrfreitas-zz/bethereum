export const formatTransactions = (transactions, blockId) =>
  transactions.map(transaction => ({
    text: transaction.hash,
    route: `/block/${blockId}/transactions/${transaction.hash}`,
  }));
