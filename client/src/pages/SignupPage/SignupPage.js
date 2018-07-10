import React from 'react';

import { Footer } from 'Components/shared';
import { SignupFormContainer as SignupForm } from 'Src/features/SignupForm';
import { Wrapper, Header, H1, H2, Main, Link } from './style';

export const SignupPage = () => (
  <Wrapper>
    <Header>
      <H1>Welcome to Reactive Trello!</H1>
    </Header>

    <Main>
      <H2>Create a brave new account</H2>
      <Link to="/login" >Or sign in if you already have one</Link>
      <SignupForm />
    </Main>

    <Footer />
  </Wrapper>
);

