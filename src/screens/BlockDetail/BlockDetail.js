import React, { Component } from 'react';

import BlockDetail from 'components/BlockDetail';
import Ethereum from 'api/ethereum';

class BlockDetailScreen extends Component {
  state = {
    info: null,
  };

  componentDidMount = async blockNumber => {
    const { match } = this.props;
    const info = await Ethereum.getBlock(match.params.number);
    this.setState({ info });
  };

  render() {
    const { info } = this.state;
    return info && <BlockDetail data={info} />;
  }
}

export default BlockDetailScreen;
