import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './pages/Index';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
    </Switch>
  );
};

export default Router;
