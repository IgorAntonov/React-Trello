import React from 'react';

import { HeaderWrapper, Logo } from './style';
import AuthBlock from '../AuthBlock';

const Header = () => (
  <HeaderWrapper>
    <Logo to="/">
      Reactive Trello
    </Logo>
    <AuthBlock />
  </HeaderWrapper>
);

export default Header;

