import React from 'react';

import { HeaderWrapper, Logo } from './style';
import { AuthBlock } from '../AuthBlock';

export const GreetingHeader = () => (
  <HeaderWrapper>
    <Logo to="/">
      Reactive Trello
    </Logo>
    <AuthBlock />
  </HeaderWrapper>
);
