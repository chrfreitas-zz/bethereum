import React, { Component } from 'react';

import Sidebar from 'components/Sidebar';

class BlockDetailScreen extends Component {
  componentDidMount = async () => {
    const { getBlockInfo, blockId } = this.props;
    getBlockInfo(blockId);
  };

  render() {
    const { block, isLoading } = this.props;
    return (
      block && <Sidebar header="Block" data={block} isLoading={isLoading} />
    );
  }
}

export default BlockDetailScreen;
