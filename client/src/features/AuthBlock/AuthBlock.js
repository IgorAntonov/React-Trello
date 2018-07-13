import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  StyledLink as Link,
  Button,
  A
} from 'Src/ui';

export const AuthBlock = ({ isAuth, logoutUser }) => (
  <Row justify="space-between" padding="0.25rem 0.5rem">
    {isAuth ? (
      <Fragment>
        <Link bgcolor="#607D8B" to="/boards">Boards</Link>
        <Button bgcolor="#607D8B" onClick={logoutUser}>Logout</Button>
      </Fragment>
    ) : (
      <Fragment>
        <A raised bgcolor="#e64a19" href="/api/auth/google">
          with Google
        </A>
        <Link bgcolor="#607D8B" to="/login">
          LOGIN
        </Link>
        <Link bgcolor="#607D8B" to="/signup">
          SIGNUP
        </Link>
      </Fragment>
    )}
  </Row>
);

AuthBlock.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};

