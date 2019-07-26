import Ethereum from 'api/ethereum';

export const formatTransaction = transaction => [
  {
    title: 'Transaction Hash',
    value: transaction.hash,
  },
  {
    title: 'Block Number',
    value: transaction.blockNumber,
  },
  {
    title: 'From',
    value: transaction.from,
  },
  {
    title: 'To',
    value: transaction.to,
  },
  {
    title: 'Gas',
    value: transaction.gas,
  },
  {
    title: 'Transaction Index',
    value: transaction.transactionIndex,
  },
  {
    title: 'Ether',
    value: Ethereum.convertToEther(transaction.value),
  },
];
