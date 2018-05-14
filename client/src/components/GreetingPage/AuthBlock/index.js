import React from 'react';

import { Wrapper, Link } from './style';

export const AuthBlock = () => (
  <Wrapper>
    <Link to="/">LOGIN</Link>
    <Link to="/" signup="true">SIGNUP</Link>
  </Wrapper>
);
