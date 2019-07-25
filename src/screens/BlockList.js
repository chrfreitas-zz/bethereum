import React, { Component } from 'react';

import List from 'components/List';
import Header from 'components/Header';
import Spinner from 'components/Spinner';

class BlockListScreen extends Component {
  async componentDidMount() {
    const { getBlocks } = this.props;
    getBlocks();
  }

  render() {
    const { blocks } = this.props;

    console.log(blocks);

    return (
      <div>
        <Header>Blocks</Header>
        {blocks.length === 0 ? <Spinner /> : <List data={blocks} />}
      </div>
    );
  }
}

export default BlockListScreen;
