import React from 'react';

import BlockList from 'components/BlockList';
import styles from './Main.scss';

const Main = () => (
  <div className="main">
    <div className="main__column">
      <BlockList />
    </div>
  </div>
);

export default Main;
