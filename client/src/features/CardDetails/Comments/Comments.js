import React from 'react';
import PropTypes from 'prop-types';

import { Col } from 'Src/ui';
import { Comment } from '../Comment';


export const Comments = ({ comments }) => (
  <Col>
    {comments.map(comment => (
      <Comment comment={comment} key={comment.createAt} />
    ))}
  </Col>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
