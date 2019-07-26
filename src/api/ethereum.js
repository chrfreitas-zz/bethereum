import Web3 from 'web3';

const websocket = new Web3('wss://mainnet.infura.io/ws');
const api = new Web3('https://mainnet.infura.io/');

const Ethereum = {
  watch: callback =>
    websocket.eth.subscribe('newBlockHeaders').on('data', callback),

  getBlocks: async (amount = 20) => {
    const block = await api.eth.getBlock('latest');

    const requests = Array(amount)
      .fill()
      .map((item, index) => api.eth.getBlock(block.number - index));

    return Promise.all(requests);
  },

  getBlockInfo: number => api.eth.getBlock(number),

  getTransactions: transactions => {
    const requests = transactions.map(transaction =>
      api.eth.getTransaction(transaction)
    );

    return Promise.all(requests);
  },

  getTransactionInfo: transactionId => api.eth.getTransaction(transactionId),

  convertToEther: (value = '') => api.utils.fromWei(value),
};

export default Ethereum;
