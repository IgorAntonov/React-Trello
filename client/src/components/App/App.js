import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import { GreetingPage } from 'Components/GreetingPage';
import { SignupPage } from 'Components/SignupPage';
import { LoginPage } from 'Components/LoginPage';
import { BoardsPage } from 'Components/BoardsPage';
import { PrivateRoute } from 'Components/shared';

class App extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
  }

  componentDidMount = () => {
    this.props.fetchUser();
  }

  render() {
    const { isAuth } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={GreetingPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/boards" component={BoardsPage} isAuth={isAuth} />
      </Switch>
    );
  }
}

export const HotApp = hot(module)(App);

// eslint-disable-next-line no-unused-expressions
injectGlobal`
html, body {
  font-size: 16px;
  font-family: 'Roboto';
  background-color: #fafafa;
}

* {
    box-sizing: border-box;
  }

a {
  text-decoration: none;
}
`;
