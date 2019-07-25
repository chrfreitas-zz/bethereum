import React, { Component } from 'react';

import Header from 'components/Header';
import List from 'components/List';
import Sidebar from 'components/Sidebar';
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
        {blocks.length === 0 ? <Spinner /> : <List data={blocks} />}
        <Sidebar />
      </div>
    );
  }
}

export default BlockListScreen;
