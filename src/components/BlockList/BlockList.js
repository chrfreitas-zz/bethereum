import React, { Component } from 'react';
import Ethereum from 'api/ethereum';

const NUMBER_LOAD_BLOCKS = 20;

class BlockList extends Component {
  state = {
    blocks: [],
  };

  async componentDidMount() {
    this.loadBlocks();
    this.startWatch();
  }

  startWatch = () => {
    Ethereum.watch(block => {
      this.setState(prevState => ({ blocks: [block, ...prevState.blocks] }));
    });
  };

  loadBlocks = async () => {
    const blocks = await Ethereum.getLastBlocks(NUMBER_LOAD_BLOCKS);
    this.setState({ blocks });
  };

  render() {
    const { blocks } = this.state;
    return blocks.map(block => (
      <ul key={block.number}>
        <li>{block.number}</li>
      </ul>
    ));
  }
}

export default BlockList;
