import React from 'react';
import Reader from './Reader/Reader';
import publications from './Reader/publications';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/reader"
        exact
        render={props =>
          props.location.search ? (
            <Reader {...props} items={publications} />
          ) : (
            <Redirect
              to={{
                pathname: '/reader',
                search: '?item=1',
              }}
            />
          )
        }
      />

      <Redirect
        to={{
          pathname: '/reader',
          search: '?item=1',
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default App;
