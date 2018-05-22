import React from 'react';
import PropTypes from 'prop-types';

import { Footer, H2 } from '../shared';
import { SignupForm } from './SignupForm';
import { Wrapper, Header, H1, Main, Link } from './style';

export const SignupPage = props => (
  <Wrapper>
    <Header>
      <H1>Welcome to Reactive Trello!</H1>
    </Header>

    <Main>
      <H2>Create a brave new account</H2>
      <Link to="/login" >Or sign in if you already have one</Link>
      <SignupForm
        error={props.error}
        signup={props.signup}
        redirect={props.history.push}
      />
    </Main>

    <Footer />
  </Wrapper>
);


SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

