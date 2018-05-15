import React from 'react';

import { GreetingHeader } from './GreetingHeader';
import { GreetingMain } from './GreetingMain';
import { Footer } from '../shared';
import { Wrapper } from './style';

export const GreetingPage = () => (
  <Wrapper>
    <GreetingHeader />
    <GreetingMain />
    <Footer />
  </Wrapper>
);

