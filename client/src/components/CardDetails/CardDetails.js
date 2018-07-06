import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

import { CardName } from './CardName';
import { CardDescription } from './CardDescription';
import { AddComment } from './AddComment';
import { Comments } from './Comments';
import { Wrapper, DetailsWrapper, CloseBtn, CloseIcon } from './style';

export const CardDetails = ({
  card, closeCardDetails, listTitle, renameCard, addCardDesc,
  user, addComment
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
        <AddComment
          cardId={card._id}
          username={user.username}
          addComment={addComment}
        />
        <Comments comments={card.comments} />
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
  addCardDesc: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string
  }).isRequired,
  addComment: PropTypes.func.isRequired
};

