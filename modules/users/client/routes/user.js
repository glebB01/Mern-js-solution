import React from 'react';
import { Route, IndexRoute } from 'react-router';

import * as AuthService from '../services/auth';

import UserLayout from '../layouts/UserLayout';
import Users from '../components/Users';

function isAuthRouter(nextState, replaceState) {
  AuthService.isAuthRouter(nextState, replaceState);
}

export default function() {
  return (
    <Route path='users' component={UserLayout} onEnter={isAuthRouter}>
      <IndexRoute component={Users} />
      {/*<Route path='create' component={UserCreate} />
      <Route path=':_id' component={UserShow} />
      <Route path=':_id/edit' component={UserEdit} />*/}
    </Route>
  )
};