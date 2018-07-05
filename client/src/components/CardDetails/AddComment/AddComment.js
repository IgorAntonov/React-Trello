import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';

import { Wrapper, IconContainer, ContentContainer, CommentIcon, Header, CommentInput, UserName } from './style';

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
    } else if (e.type === 'blur') {
      addComment(e.target.value, cardId);
      e.target.value = '';
    }
  }

  render() {
    const { username } = this.props;
    return (
      <Wrapper>
        <IconContainer>
          <CommentIcon />
        </IconContainer>
        <ContentContainer>
          <Header>Add Comment</Header>
          <UserName>as {username}</UserName>
          <CommentInput
            innerRef={x => { this.input = x; }}
            onBlur={this.handleAddComment}
            onKeyPress={this.handleAddComment}
          />
        </ContentContainer>
      </Wrapper>
    );
  }
}
