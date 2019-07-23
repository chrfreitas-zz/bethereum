import React from 'react';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Spinner from 'components/Spinner';

export default ({ transactions }) => (
  <div>
    <Header>Blocks</Header>
    {transactions.length === 0 ? (
      <Spinner />
    ) : (
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.hash}>
            <Link to={`/transactions/${transaction.hash}`}>
              {transaction.hash}
            </Link>
          </li>
        ))}
      </ul>
    )}
  </div>
);
