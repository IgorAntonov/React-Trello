import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledLink as Link, Button, A } from 'Components/shared';
import { Wrapper } from './style';

export const AuthBlock = ({ isAuth, logout }) => (
  <Wrapper>
    {isAuth ?
      <Fragment>
        <Link to="/boards">Boards</Link>
        <Button onClick={logout} >Logout</Button>
      </Fragment> :
      <Fragment>
        <A href="/api/auth/google" >Login with Google</A>
        <Link color="#388e3c" to="/login">LOGIN</Link>
        <Link color="#e64a19" to="/signup">SIGNUP</Link>
      </Fragment>}
  </Wrapper>
);

AuthBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

