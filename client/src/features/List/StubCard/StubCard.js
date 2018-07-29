import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CardButton } from './style';

export const StubCard = ({ name, firstCard }) => (
  <Wrapper>
    <CardButton firstCard={firstCard} >
      {name}
    </CardButton>
  </Wrapper>
);

StubCard.defaultProps = {
  firstCard: false
};

StubCard.propTypes = {
  name: PropTypes.string.isRequired,
  firstCard: PropTypes.bool
};
