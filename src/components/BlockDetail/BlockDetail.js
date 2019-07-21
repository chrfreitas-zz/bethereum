import React from 'react';

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
        <div key={transaction.hash}>Hash: {transaction.hash}</div>
      ))}
    </div>
  </div>
);

export default BlockDetail;
