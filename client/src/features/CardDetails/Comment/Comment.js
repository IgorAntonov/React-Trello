import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper, IconContainer, ContentContainer, AvatarIcon,
  Header, AuthorName, Time, CommentBody
} from './style';

export const Comment = ({ comment }) => (
  <Wrapper>
    <IconContainer>
      <AvatarIcon />
    </IconContainer>
    <ContentContainer>
      <Header>
        <AuthorName>{comment.author}</AuthorName>
        <Time date={comment.createAt} component="div" minPeriod={5} />
      </Header>
      <CommentBody>
        {comment.body}
      </CommentBody>
    </ContentContainer>
  </Wrapper>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createAt: PropTypes.number.isRequired
  }).isRequired,
};
