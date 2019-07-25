import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import BlockList from 'containers/BlockList';
import TransactionsList from 'containers/TransactionsList';
import store from 'redux/store';

// eslint-disable-next-line
import styles from 'styles/base.scss';

const App = () => (
  <div className="main">
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/block/:blockId/transactions/"
            component={TransactionsList}
          />
          <Route path="/" component={BlockList} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
