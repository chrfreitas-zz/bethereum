import React, { Component } from 'react';

import BlockDetail from 'components/BlockDetail';

class BlockDetailScreen extends Component {
  componentDidMount = async () => {
    const { getBlockDetail, match } = this.props;
    getBlockDetail(match.params.number);
  };

  render() {
    const { block, transactions } = this.props;
    return block && <BlockDetail block={block} transactions={transactions} />;
  }
}

export default BlockDetailScreen;
