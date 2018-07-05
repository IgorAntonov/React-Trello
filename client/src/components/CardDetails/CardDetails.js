import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

import { CardName } from './CardName';
import { CardDescription } from './CardDescription';
import { Wrapper, DetailsWrapper, CloseBtn, CloseIcon } from './style';

export const CardDetails = ({
  card, closeCardDetails, listTitle, renameCard, addCardDesc
}) => (
  <Portal>
    <Wrapper>
      <DetailsWrapper onClickOutside={closeCardDetails} >
        <CardName
          cardId={card._id}
          cardName={card.name}
          listTitle={listTitle}
          renameCard={renameCard}
        />
        <CardDescription
          cardId={card._id}
          description={card.description}
          addCardDesc={addCardDesc}
        />
        <CloseBtn onClick={closeCardDetails} >
          <CloseIcon />
        </CloseBtn>
      </DetailsWrapper>
    </Wrapper>
  </Portal>
);

CardDetails.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired,
  closeCardDetails: PropTypes.func.isRequired,
  listTitle: PropTypes.string.isRequired,
  renameCard: PropTypes.func.isRequired,
  addCardDesc: PropTypes.func.isRequired
};

