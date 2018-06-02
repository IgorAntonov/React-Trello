/* eslint-disable */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      props.isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/login" />
    }}
  />
);

