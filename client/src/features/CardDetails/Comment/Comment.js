import React from 'react';
import PropTypes from 'prop-types';

import { Row, Icon } from 'Src/ui';
import {
  IconContainer,
  ContentContainer,
  Header,
  AuthorName,
  Time,
  CommentBody
} from './style';

export const Comment = ({ comment }) => (
  <Row margin="0 0 0.5rem 0">
    <IconContainer>
      <Icon icon="portrait" width="28px" height="28px" />
    </IconContainer>
    <ContentContainer>
      <Header>
        <AuthorName>{comment.author}</AuthorName>
        <Time
          date={comment.createAt}
          component="div"
          minPeriod={5}
        />
      </Header>
      <CommentBody>
        {comment.body}
      </CommentBody>
    </ContentContainer>
  </Row>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createAt: PropTypes.number.isRequired
  }).isRequired,
};
