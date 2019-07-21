import React from 'react';
import EthereumLogo from 'assets/ethereum-logo.png';

// eslint-disable-next-line
import styles from './Main.scss';

const Main = ({ children }) => (
  <div className="main">
    <div className="main__sidebar">
      <img className="main__logo" src={EthereumLogo} />
    </div>
    <div className="main__content">{children}</div>
  </div>
);

export default Main;
