import React from 'react';

const TrasanctionDetail = ({ transaction }) => (
  <div>
    <div>Block Hash: {transaction.blockHash}</div>
    <div>Hash: {transaction.hash}</div>
    <div>From: {transaction.from}</div>
    <div>To: {transaction.to}</div>
    <div>Value: {transaction.value}</div>
  </div>
);

export default TrasanctionDetail;
