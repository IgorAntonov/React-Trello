import React from 'react';
import posed from 'react-pose';

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

const PosedH1 = posed(H1)({
  init: { translateY: '-100%' },
  mount: { translateY: 0, transition: { type: 'spring', delay: 100 } }
});
const PosedH2 = posed(H2)({
  init: { translateX: '100%' },
  mount: { translateX: 0, transition: { type: 'spring' } }
});

export const SignupPage = () => (
  <FlexPage>
    <Header justify="center" bgColor="#0067a3">
      <PosedH1 initialPose="init" pose="mount">
        Welcome to Reactive Trello!
      </PosedH1>
    </Header>
    <Col align="center" grow={1} padding="2rem" bgColor="#0079bf">
      <PosedH2 initialPose="init" pose="mount">
        Create a brave new account
      </PosedH2>
      <StyledLink to="/login" bgcolor="transparent">
        Or sign in if you already have one
      </StyledLink>
      <SignupForm />
    </Col>
    <Footer />
  </FlexPage>
);

