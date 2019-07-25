import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from 'components/Header';
import List from 'components/List';
import Spinner from 'components/Spinner';
import BlockDetail from 'containers/BlockDetail';

class BlockListScreen extends Component {
  async componentDidMount() {
    const { getBlocks } = this.props;
    getBlocks();
  }

  render() {
    const { blocks } = this.props;

    return (
      <div>
        <Header>Latests Blocks</Header>
        {blocks.length === 0 ? <Spinner /> : <List data={blocks} />}
        <Route path="/blocks/:blockId" exact component={BlockDetail} />
      </div>
    );
  }
}

export default BlockListScreen;
