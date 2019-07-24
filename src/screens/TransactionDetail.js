import React, { Component } from 'react';

import TransactionDetail from 'components/TransactionDetail';

class TransactionDetailScreen extends Component {
  async componentDidMount() {
    const { getTransactionInfo, transactionId } = this.props;
    getTransactionInfo(transactionId);
  }

  render() {
    const { transaction } = this.props;
    return transaction ? (
      <TransactionDetail transaction={transaction} />
    ) : (
      <div />
    );
  }
}

export default TransactionDetailScreen;
