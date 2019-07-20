import React, { Component } from 'react';
import Ethereum from '../../api/ethereum';

class BlockList extends Component {
  state = {
    blocks: [],
  };

  async componentDidMount() {
    const blocks = await Ethereum.getLastBlocks(10);
    this.setState({ blocks });

    Ethereum.watch(block => {
      this.setState(prevState => ({ blocks: [block, ...prevState.blocks] }));
    });
  }

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
