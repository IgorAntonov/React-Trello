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
import { SignupForm } from 'Src/features/SignupForm';


export const SignupPage = () => (
  <FlexPage>
    <Header justify="center" bgColor="#0067a3">
      <H1>Welcome to Reactive Trello!</H1>
    </Header>

    <Col align="center" grow={1} padding="2rem" bgColor="#0079bf">
      <H2>Create a brave new account</H2>
      <StyledLink to="/login" bgcolor="transparent">
        Or sign in if you already have one
      </StyledLink>
      <SignupForm />
    </Col>

    <Footer />
  </FlexPage>
);

