import React from 'react';

import Block from 'components/Block';

const BlockList = ({ data }) => (
  <ul>
    {data.map(block => (
      <Block key={block.hash} data={block} />
    ))}
  </ul>
);

export default BlockList;
