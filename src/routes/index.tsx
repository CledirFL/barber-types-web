import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import SelectProvider from '../pages/SelectProvider';
import CreateAppointment from '../pages/CreateAppointment';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={SignUp} />
    <Route path="/passwords/forgot" component={ForgotPassword} />
    <Route path="/passwords/reset" component={ResetPassword} />
    <Route path="/profile" isPrivate component={Profile} />

    <Route path="/p/dashboard" component={Dashboard} isPrivate />

    <Route
      path="/c/appointment/select-provider"
      component={SelectProvider}
      isPrivate
      isClient
    />
    <Route
      path="/c/appointment/create/:provider_id"
      component={CreateAppointment}
      isPrivate
      isClient
    />
  </Switch>
);

export default Routes;
