import React, { Component } from 'react';

import BlockList from 'components/BlockList';
import Ethereum from 'api/ethereum';

const NUMBER_LOAD_BLOCKS = 10;

class BlockListScreen extends Component {
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
    return <BlockList data={blocks} />;
  }
}

export default BlockListScreen;
