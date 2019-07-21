import React, { Component } from 'react';

import BlockDetail from 'components/BlockDetail';
import Ethereum from 'api/ethereum';

class BlockDetailScreen extends Component {
  state = {
    block: null,
    transactions: null,
  };

  componentDidMount = async () => {
    await this.getBlockInfo();
    this.getTransactionsInfo();
  };

  getBlockInfo = async () => {
    const { match } = this.props;
    const block = await Ethereum.getBlock(match.params.number);

    this.setState({ block });
  };

  getTransactionsInfo = async () => {
    const { block } = this.state;
    const transactions = await Ethereum.getTransactionsInfo(block.transactions);

    this.setState({
      transactions: transactions.filter(
        transaction => Number(transaction.value) > 0
      ),
    });
  };

  render() {
    const { block, transactions } = this.state;
    return (
      block &&
      transactions && <BlockDetail block={block} transactions={transactions} />
    );
  }
}

export default BlockDetailScreen;
