import React from 'react';

import { Wrapper } from './style';
import { StyledLink as Link } from '../../shared';

export const AuthBlock = () => (
  <Wrapper>
    <Link color="#388e3c" to="/login">LOGIN</Link>
    <Link color="#e64a19" to="/signup" signup="true">SIGNUP</Link>
  </Wrapper>
);
