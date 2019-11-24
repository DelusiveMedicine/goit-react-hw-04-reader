import React from 'react';
import Reader from './Reader/Reader';
import publications from './Reader/publications';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import queryString from 'query-string';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/reader"
        exact
        render={props => {
          const queryParams = queryString.parse(props.location.search);
          const item = Number(queryParams.item);

          return item > 0 && item <= publications.length ? (
            <Reader {...props} item={item} items={publications} />
          ) : (
            <Redirect
              to={{
                pathname: '/reader',
                search: '?item=1',
              }}
            />
          );
        }}
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
