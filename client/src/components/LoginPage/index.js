import React from 'react';

import { LoginHeader } from './LoginHeader';
import { LoginMain } from './LoginMain';
import { Footer } from '../shared';
import { Wrapper } from './style';

export const LoginPage = () => (
  <Wrapper>
    <LoginHeader />
    <LoginMain />
    <Footer />
  </Wrapper>
);
