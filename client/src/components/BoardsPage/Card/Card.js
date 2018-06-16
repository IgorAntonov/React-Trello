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

