import React from 'react';
import PropTypes from 'prop-types';

import { Footer, H2 } from '../shared';
import { SignupForm } from './SignupForm';
import { Wrapper, Header, H1, Main, Link } from './style';

export const SignupPage = ({ auth, signup }) => (
  <Wrapper>
    <Header>
      <H1>Welcome to Reactive Trello!</H1>
    </Header>

    <Main>
      <H2>Create a brave new account</H2>
      <Link to="/login" >Or sign in if you already have one</Link>
      <SignupForm
        error={auth.error}
        signup={signup}
        isLoading={auth.isLoading}
        user={auth.user}
      />
    </Main>

    <Footer />
  </Wrapper>
);


SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    error: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  }).isRequired
};

