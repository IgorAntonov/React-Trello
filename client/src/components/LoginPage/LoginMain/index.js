import React from 'react';

import { Wrapper, Link } from './style';
import { H2 } from '../../shared';
import { LoginForm } from '../LoginForm';

export const LoginMain = () => (
  <Wrapper>
    <H2>Sign in and continue to work productively</H2>
    <Link to="/signup" >Do not have an account yet?</Link>
    <LoginForm />
  </Wrapper>
);
