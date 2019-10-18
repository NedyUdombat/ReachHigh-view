import React from 'react';
import { Route, Switch } from 'react-router-dom';

// wrappers
import ProtectedRoute from './wrappers/ProtectedRoute';
import GuestWrapper from './wrappers/GuestWrapper';

// pages
import App from './pages/Index';
import Authentication from './pages/Authentication';
import Goals from './pages/Goals';
import Tasks from './pages/Tasks';
import SingleTask from './pages/SingleTask';
import NotFound from './pages/Errors/404';

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact component={App} />
      <GuestWrapper path="/auth" exact component={Authentication} />
      <ProtectedRoute path="/goals" exact component={Goals} />
      <ProtectedRoute path="/tasks" exact component={Tasks} />
      <ProtectedRoute path="/tasks/:id" component={SingleTask} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
