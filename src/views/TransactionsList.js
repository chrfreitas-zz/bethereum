import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import List from 'components/List';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import TransactionDetail from 'containers/TransactionDetail';

class TransactionsListScreen extends Component {
  async componentDidMount() {
    const { getTransactions, blockId } = this.props;
    getTransactions(blockId);
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <Header>Transactions</Header>
        {transactions.length === 0 ? <Spinner /> : <List data={transactions} />}
        <Route
          path="/blocks/:blockId/transactions/:transactionId"
          exact
          component={TransactionDetail}
        />
      </div>
    );
  }
}

export default TransactionsListScreen;
