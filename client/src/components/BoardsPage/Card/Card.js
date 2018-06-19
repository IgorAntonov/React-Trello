import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';

export const Card = ({ card }) => (
  <Wrapper>
    {card.name}
  </Wrapper>
);

Card.propTypes = {
  card: PropTypes.shape({}).isRequired
};

export const StubCard = ({ name }) => (
  <Wrapper>
    {name}
  </Wrapper>
);
StubCard.propTypes = {
  name: PropTypes.string.isRequired
};
