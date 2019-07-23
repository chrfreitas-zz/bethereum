import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from 'screens/Main';
import BlockList from 'containers/BlockList';
import BlockDetail from 'containers/BlockDetail';
import TransactionsList from 'containers/TransactionsList';
import TransactionDetail from 'containers/TransactionDetail';
import store from 'redux/store';

// eslint-disable-next-line
import styles from 'styles/base.scss';

const App = () => (
  <Main>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={BlockList} />
          <Route path="/block/:id" component={BlockDetail} />
          <Route path="/transactions/" exact component={TransactionsList} />
          <Route path="/transactions/:id" exact component={TransactionDetail} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </Main>
);

ReactDOM.render(<App />, document.getElementById('root'));
