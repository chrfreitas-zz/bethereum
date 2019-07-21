import React from 'react';

const TrasanctionDetail = ({ data }) => (
  <div>
    <div>Block Hash: {data.blockHash}</div>
    <div>Hash: {data.hash}</div>
    <div>From: {data.from}</div>
    <div>To: {data.to}</div>
    <div>Value: {data.value}</div>
  </div>
);

export default TrasanctionDetail;
