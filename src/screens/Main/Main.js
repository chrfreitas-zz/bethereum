import React from 'react';

import styles from './Main.scss';

const Main = ({ children }) => (
  <div className="main">
    <h3 className="main__header">Ethereum Blockchain</h3>
    <div className="main__column">{children}</div>
  </div>
);

export default Main;
