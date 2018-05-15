import React from 'react';

import { Wrapper } from './style';
import { H2, P } from '../../shared';
import { SignupForm } from '../SignupForm';

export const SignupMain = () => (
  <Wrapper>
    <H2>Create a brave new account</H2>
    <P>Or sign in if you already have one</P>
    <SignupForm />
  </Wrapper>
);
