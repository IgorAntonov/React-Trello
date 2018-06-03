import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { StyledLink as Link } from 'Components/shared';
import { Wrapper } from './style';

export const AuthBlock = ({ isAuth }) => (
  <Wrapper>
    {isAuth
      ? <Link to="/boards">Boards</Link> :
      <Fragment>
        <Link color="#388e3c" to="/login">LOGIN</Link>
        <Link color="#e64a19" to="/signup">SIGNUP</Link>
      </Fragment>}
  </Wrapper>
);

AuthBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired
};

