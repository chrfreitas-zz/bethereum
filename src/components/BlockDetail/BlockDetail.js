import React from 'react';
import { Link } from 'react-router-dom';

const BlockDetail = ({ block, transactions }) => (
  <div>
    <div>Dificulty: {block.difficulty}</div>
    <div>Hash: {block.hash}</div>
    <div>Timestamp: {block.timestamp}</div>
    <div>Size: {block.size}</div>
    <div>Gas Used: {block.gasUsed}</div>
    <div>Number: {block.number}</div>
    <div>Transactions:</div>
    <div>
      {transactions.map(transaction => (
        <Link key={transaction.hash} to={`/transaction/${transaction.hash}`}>
          Hash: {transaction.hash}
        </Link>
      ))}
    </div>
  </div>
);

export default BlockDetail;
