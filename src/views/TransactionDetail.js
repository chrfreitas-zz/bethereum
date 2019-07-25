import React, { Component } from 'react';

import Spinner from 'components/Spinner';

class TransactionDetailScreen extends Component {
  async componentDidMount() {
    const { getTransactionInfo, transactionId } = this.props;
    getTransactionInfo(transactionId);
  }

  render() {
    const { transaction } = this.props;
    return transaction ? (
      <div>
        <div>Block Hash: {transaction.blockHash}</div>
        <div>Hash: {transaction.hash}</div>
        <div>From: {transaction.from}</div>
        <div>To: {transaction.to}</div>
        <div>Value: {transaction.value}</div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default TransactionDetailScreen;
