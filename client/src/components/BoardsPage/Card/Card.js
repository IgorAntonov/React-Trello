import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CardButton } from './style';

export const Card = ({ card, openCardDetails, listId }) => (
  <Wrapper>
    <CardButton onClick={() => openCardDetails(card._id, listId)} >
      {card.name}
    </CardButton>
  </Wrapper>
);

Card.propTypes = {
  card: PropTypes.shape({}).isRequired,
  openCardDetails: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired
};


export const StubCard = ({ name }) => (
  <Wrapper>
    {name}
  </Wrapper>
);
StubCard.propTypes = {
  name: PropTypes.string.isRequired
};
