import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Switch, Route } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { GreetingPage } from '../GreetingPage';
import { SignupPage } from '../SignupPage';
import { LoginPage } from '../LoginPage';
import { BoardsPage } from '../BoardsPage/index';

class App extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    this.props.fetchUser();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={GreetingPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/boards" component={BoardsPage} />
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
