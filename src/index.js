import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'screens/Main';
import BlockList from 'screens/BlockList';
import BlockDetail from 'screens/BlockDetail';
import styles from 'styles/base.scss';

const App = () => (
  <Main>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={BlockList} />
        <Route path="/block/:number" component={BlockDetail} />
      </Switch>
    </BrowserRouter>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('root'));
