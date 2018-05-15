import React from 'react';

import { SignupHeader } from './SignupHeader';
import { SignupMain } from './SignupMain';
import { Footer } from '../shared';
import { Wrapper } from './style';

export const SignupPage = () => (
  <Wrapper>
    <SignupHeader />
    <SignupMain />
    <Footer />
  </Wrapper>
);

