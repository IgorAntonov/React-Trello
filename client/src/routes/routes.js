import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import {
  BoardsPage,
  GreetingPage,
  LoginPage,
  SignupPage
} from 'Src/pages';
import { PrivateRoute } from './PrivateRoute';

const routes = [
  {
    path: '/',
    exact: true,
    isPrivate: false,
    component: GreetingPage
  },
  {
    path: '/signup',
    exact: false,
    isPrivate: false,
    component: SignupPage
  },
  {
    path: '/login',
    exact: false,
    isPrivate: false,
    component: LoginPage
  },
  {
    path: '/boards',
    exact: false,
    isPrivate: true,
    component: BoardsPage
  }
];

export const Routes = ({ isAuth }) => (
  <Switch>
    {routes.map(route => {
      const {
        path, exact, isPrivate, component
      } = route;
      if (isPrivate) {
        return (
          <PrivateRoute
            path={path}
            exact={exact}
            component={component}
            isAuth={isAuth}
            key={path}
          />
        );
      }
      return (
        <Route
          path={path}
          exact={exact}
          component={component}
          key={path}
        />
      );
    })}
  </Switch>
);

Routes.propTypes = {
  isAuth: PropTypes.bool.isRequired
};
