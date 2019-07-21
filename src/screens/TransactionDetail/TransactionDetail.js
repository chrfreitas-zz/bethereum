import React, { Component } from 'react';

import TransactionDetail from 'components/TransactionDetail';
import Ethereum from 'api/ethereum';

class TransactionDetailScreen extends Component {
  state = {
    transactions: null,
  };

  async componentDidMount() {
    await this.getTransactionInfo();
  }

  getTransactionInfo = async () => {
    const { match } = this.props;

    const [transaction] = await Ethereum.getTransactionsInfo([
      match.params.number,
    ]);

    this.setState({ transaction });
  };

  render() {
    const { transaction } = this.state;
    return transaction ? <TransactionDetail data={transaction} /> : <div />;
  }
}

export default TransactionDetailScreen;
