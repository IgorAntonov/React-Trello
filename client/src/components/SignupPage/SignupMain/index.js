import React from 'react';

import { Wrapper, Link } from './style';
import { H2 } from '../../shared';
import { SignupForm } from '../SignupForm';

export const SignupMain = () => (
  <Wrapper>
    <H2>Create a brave new account</H2>
    <Link to="/login" >Or sign in if you already have one</Link>
    <SignupForm />
  </Wrapper>
);
