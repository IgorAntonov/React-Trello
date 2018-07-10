import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledLink as Link, Button, A } from 'Components/shared';
import { Wrapper } from './style';

export const AuthBlock = ({ isAuth, logoutUser }) => (
  <Wrapper>
    {isAuth ?
      <Fragment>
        <Link to="/boards">Boards</Link>
        <Button onClick={logoutUser} >Logout</Button>
      </Fragment> :
      <Fragment>
        <A color="#e64a19" href="/api/auth/google" >with Google</A>
        <Link color="#607D8B" to="/login">LOGIN</Link>
        <Link color="#607D8B" to="/signup">SIGNUP</Link>
      </Fragment>}
  </Wrapper>
);

AuthBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

