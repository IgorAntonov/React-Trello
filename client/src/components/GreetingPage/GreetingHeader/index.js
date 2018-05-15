import React from 'react';

import { Wrapper, Logo } from './style';
import { AuthBlock } from '../AuthBlock';

export const GreetingHeader = () => (
  <Wrapper>
    <Logo to="/">
      Reactive Trello
    </Logo>
    <AuthBlock />
  </Wrapper>
);
