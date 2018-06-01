import React from 'react';

import { StyledLink as Link } from 'Shared';
import { Wrapper } from './style';

export const AuthBlock = () => (
  <Wrapper>
    <Link color="#388e3c" to="/login">LOGIN</Link>
    <Link color="#e64a19" to="/signup" signup="true">SIGNUP</Link>
  </Wrapper>
);
