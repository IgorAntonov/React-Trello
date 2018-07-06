import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';
import { Wrapper } from './style';

export const Comments = ({ comments }) => (
  <Wrapper>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.createAt} />
    ))}
  </Wrapper>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
