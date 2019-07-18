import Web3 from 'web3';

const startWatch = () => {
  const web3 = new Web3('wss://mainnet.infura.io/ws');

  web3.eth.subscribe('newBlockHeaders').on('data', block => {
    console.log(block);
  });
};

const getLast20Blocks = async amount => {
  const web3 = new Web3('https://mainnet.infura.io/');

  const block = await web3.eth.getBlock('latest');

  for (let i = 0; i < amount; i++) {
    const x = await web3.eth.getBlock(block.number - i);
    console.log(x);
  }
};

const getLastBlock = async () => {
  const web3 = new Web3('https://mainnet.infura.io/');

  const block = await web3.eth.getBlock('latest');
  return block;
};

export { getLastBlock, startWatch, getLast20Blocks };
