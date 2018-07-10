import React from 'react';

import { Footer } from 'Components/shared';
import { LoginFormContainer as LoginForm } from './LoginForm';
import { Wrapper, Header, H1, H2, Main, Link } from './style';

export const LoginPage = () => (
  <Wrapper>
    <Header>
      <H1>Welcome back to Reactive Trello!</H1>
    </Header>

    <Main>
      <H2>Sign in and continue to work productively</H2>
      <Link to="/signup" >Do not have an account yet?</Link>
      <LoginForm />
    </Main>

    <Footer />
  </Wrapper>
);
