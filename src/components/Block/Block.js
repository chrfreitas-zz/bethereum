import React, { Component } from 'react';

import Ethereum from 'api/ethereum';
import styles from './Block.scss';

class Block extends Component {
  state = {
    info: {},
  };

  openDetail = async blockNumber => {
    const info = await Ethereum.getBlock(blockNumber);
    this.setState({ info });
  };

  render() {
    const { data } = this.props;
    const { info } = this.state;

    return (
      <li className="block" onClick={() => this.openDetail(data.number)}>
        <div>{data.number}</div>
        {info && (
          <div>
            <div>{info.hash}</div>
            <div>{info.timestamp}</div>
            <div>{info.size}</div>
          </div>
        )}
      </li>
    );
  }
}

export default Block;
