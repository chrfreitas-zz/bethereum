import React, { Component } from 'react';

import TransactionDetail from 'components/TransactionDetail';

class TransactionDetailScreen extends Component {
  async componentDidMount() {
    const { getTransactionDetail, id } = this.props;
    getTransactionDetail(id);
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
