import React from 'react';

import { Wrapper, Link } from './style';

const AuthBlock = () => (
  <Wrapper>
    <Link to="/">LOGIN</Link>
    <Link to="/" signup="true">SIGNUP</Link>
  </Wrapper>
);


export default AuthBlock;

