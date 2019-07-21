import Web3 from 'web3';

const Ethereum = {
  watch: callback => {
    const web3 = new Web3('wss://mainnet.infura.io/ws');
    web3.eth.subscribe('newBlockHeaders').on('data', callback);
  },

  getLastBlocks: async (amount = 20) => {
    const web3 = new Web3('https://mainnet.infura.io/');

    const block = await web3.eth.getBlock('latest');

    let counter = 0;
    const requests = Array(amount)
      .fill()
      .map(() => web3.eth.getBlock(block.number - counter++));

    return Promise.all(requests);
  },

  getBlock: number => {
    const web3 = new Web3('https://mainnet.infura.io/');
    return web3.eth.getBlock(number);
  },

  getTransactionsInfo: transactions => {
    const web3 = new Web3('https://mainnet.infura.io/');
    const requests = transactions.map(transaction =>
      web3.eth.getTransaction(transaction)
    );

    return Promise.all(requests);
  },

  convertToEther: value => {
    const web3 = new Web3('https://mainnet.infura.io/');
    return web3.utils.fromWei(value);
  },
};

export default Ethereum;
