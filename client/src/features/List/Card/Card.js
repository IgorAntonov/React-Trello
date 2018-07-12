import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, CardButton, DescWrapper, DescIcon, CommentWrapper,
  CommentIcon, CommentCount, IconsWrapper
} from './style';

export const Card = ({
  card, openCardDetails, listId, isDragging
}) => (
  <Wrapper>
    <CardButton
      onClick={() => openCardDetails(card._id, listId)}
      isDragging={isDragging}
    >
      {card.name}
      <IconsWrapper>
        {card.description !== 'no description' && card.description.length > 0 &&
        <DescWrapper>
          <DescIcon />
        </DescWrapper>
        }
        {card.comments.length > 0 &&
          <CommentWrapper>
            <CommentIcon />
            <CommentCount>
              {card.comments.length}
            </CommentCount>
          </CommentWrapper>
      }
      </IconsWrapper>
    </CardButton>
  </Wrapper>
);

Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    comments: PropTypes.array
  }).isRequired,
  openCardDetails: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  isDragging: PropTypes.bool.isRequired
};
