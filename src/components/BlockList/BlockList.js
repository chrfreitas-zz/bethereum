import React, { Component } from 'react';

import Ethereum from 'api/ethereum';
import Block from 'components/Block';

class BlockList extends Component {
  state = {
    blocks: [],
  };

  NUMBER_LOAD_BLOCKS = 20;

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
    const blocks = await Ethereum.getLastBlocks(this.NUMBER_LOAD_BLOCKS);
    this.setState({ blocks });
  };

  render() {
    const { blocks } = this.state;
    return blocks.map(block => (
      <ul key={block.number}>
        <Block data={block} />
      </ul>
    ));
  }
}

export default BlockList;
