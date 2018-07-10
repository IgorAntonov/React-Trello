import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { PageSpinner } from 'Components/shared';
import { fetchUser, getIsAuth, getIsLoading } from 'Src/ducks/auth';
import { getColors } from 'Src/ducks/theme';
import { Routes } from './routes';

export class App extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    theme: PropTypes.shape({
      main: PropTypes.string,
      darker: PropTypes.string,
      button: PropTypes.string
    }).isRequired
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { isAuth, theme, isLoading } = this.props;
    return (
      isLoading ? <PageSpinner /> :
      <ThemeProvider theme={theme}>
        <Routes isAuth={isAuth} />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  theme: getColors(state)
});

export const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { fetchUser }),
  hot(module)
)(App);

// eslint-disable-next-line no-unused-expressions
injectGlobal`
html, body {
  font-size: 16px;
  font-family: 'Roboto';
  background-color: #fafafa;
}
* { box-sizing: border-box }
a { text-decoration: none }
`;
