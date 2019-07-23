import React, { Component } from 'react';

import BlockList from 'components/BlockList';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

class BlockListScreen extends Component {
  async componentDidMount() {
    const { getBlocks } = this.props;
    getBlocks();
  }

  render() {
    const { blocks } = this.props;

    return (
      <div>
        <Header>Blocks</Header>
        {blocks.length === 0 ? <Spinner /> : <BlockList data={blocks} />}
      </div>
    );
  }
}

export default BlockListScreen;
