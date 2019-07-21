import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'screens/Main';
import BlockList from 'screens/BlockList';
import BlockDetail from 'screens/BlockDetail';
import TransactionDetail from 'screens/TransactionDetail';
// eslint-disable-next-line
import styles from 'styles/base.scss';

const App = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={BlockList} />
        <Route path="/block/:number" component={BlockDetail} />
        <Route path="/transaction/:number" component={TransactionDetail} />
      </Switch>
    </BrowserRouter>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('root'));
