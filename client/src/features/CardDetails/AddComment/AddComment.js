import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';

import { Row, Col, Icon } from 'Src/ui';
import { IconContainer, Header, CommentInput, UserName } from './style';

export class AddComment extends Component {
  static propTypes = {
    cardId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    addComment: PropTypes.func.isRequired
  }

  componentDidMount = () => {
    autosize(this.input);
  }

  handleAddComment = e => {
    const { cardId, addComment } = this.props;
    if (e.type === 'keypress' && e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.blur();
    } else if (e.type === 'blur' && e.target.value !== '') {
      addComment(e.target.value, cardId);
      e.target.value = '';
    }
  }

  render() {
    const { username } = this.props;
    return (
      <Row margin="0 0 2rem 0">
        <IconContainer>
          <Icon icon="comment" />
        </IconContainer>
        <Col grow={1} margin="0 0.75rem" padding="0 0 0 0.5rem" >
          <Header>Add Comment</Header>
          <UserName>as {username}</UserName>
          <CommentInput
            innerRef={x => { this.input = x; }}
            onBlur={this.handleAddComment}
            onKeyPress={this.handleAddComment}
          />
        </Col>
      </Row>
    );
  }
}
