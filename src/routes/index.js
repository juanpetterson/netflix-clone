import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import Login from '@/pages/Login';

import Browse from '@/pages/Browse';
import Player from '@/pages/Player';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Browse} isPrivate />
    <Route path="/player" component={Player} isPrivate />

    <Route path="/login" component={Login} />
    <Redirect from="*" to="/" />
  </Switch>
);

export default Routes;
