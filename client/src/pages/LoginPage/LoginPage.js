import React from 'react';

import {
  Footer,
  FlexPage,
  Header,
  Col,
  H1,
  H2,
  StyledLink
} from 'Src/ui';
import { LoginForm } from 'Src/features/LoginForm';

export const LoginPage = () => (
  <FlexPage>
    <Header justify="center" bgColor="#0067a3">
      <H1>Welcome back to Reactive Trello!</H1>
    </Header>

    <Col align="center" grow={1} padding="2rem" bgColor="#0079bf">
      <H2>Sign in and continue to work productively</H2>
      <StyledLink to="/signup" bgcolor="transparent">
        Do not have an account yet?
      </StyledLink>
      <LoginForm />
    </Col>

    <Footer />
  </FlexPage>
);
