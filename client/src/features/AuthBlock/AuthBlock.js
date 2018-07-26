import React from 'react';
import PropTypes from 'prop-types';

import {
  Row,
  StyledLink as Link,
  Button,
  A
} from 'Src/ui';

export const AuthBlock = ({ loginUser }) => (
  <Row justify="space-between" padding="0.25rem 0.5rem">
    <Button
      onClick={() => loginUser({
        email: 'demo@demo.com',
        password: 'demo123'
      })}
      raised
      bgcolor="#e64a19"
    >
      Demo
    </Button>
    <A bgcolor="#607D8B" href="/api/auth/google">
      with Google
    </A>
    <Link bgcolor="#607D8B" to="/login">
      LOGIN
    </Link>
    <Link bgcolor="#607D8B" to="/signup">
      SIGNUP
    </Link>
  </Row>
);

AuthBlock.propTypes = {
  loginUser: PropTypes.func.isRequired
};

