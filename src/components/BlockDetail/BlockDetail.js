import React from 'react';

const BlockDetail = ({ data }) => (
  <div>
    <div>{data.hash}</div>
    <div>{data.timestamp}</div>
    <div>{data.size}</div>
  </div>
);

export default BlockDetail;
