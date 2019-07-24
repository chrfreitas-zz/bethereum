import React, { Component } from 'react';

import BlockDetail from 'components/BlockDetail';

class BlockDetailScreen extends Component {
  componentDidMount = async () => {
    const { getBlockInfo, id } = this.props;
    getBlockInfo(id);
  };

  render() {
    const { block, transactions } = this.props;
    return (
      block &&
      transactions.length > 0 && (
        <BlockDetail block={block} transactions={transactions} />
      )
    );
  }
}

export default BlockDetailScreen;
