import React, { Component } from 'react';

import Sidebar from 'components/Sidebar';

class TransactionDetailScreen extends Component {
  async componentDidMount() {
    const { getTransactionInfo, transactionId } = this.props;
    getTransactionInfo(transactionId);
  }

  render() {
    const { transaction, isLoading } = this.props;
    return (
      transaction && (
        <Sidebar
          header="Transaction"
          data={transaction}
          isLoading={isLoading}
        />
      )
    );
  }
}

export default TransactionDetailScreen;
