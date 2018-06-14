import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, FlexTitle, Title } from './style';

export const Board = ({ user }) => (
  <Wrapper>
    <FlexTitle>
      <Title>{user.username}</Title>
    </FlexTitle>
  </Wrapper>
);

Board.propTypes = {
  user: PropTypes.shape({}).isRequired
};

