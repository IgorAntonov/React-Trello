import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';

import { Wrapper, IconContainer, ContentContainer, DescIcon, Header, DescInput } from './style';

export class CardDescription extends Component {
  static propTypes = {
    cardId: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    addCardDesc: PropTypes.func.isRequired
  }
  componentDidMount = () => {
    autosize(this.input);
  }

  handleAddDesc = e => {
    const { cardId, addCardDesc } = this.props;
    if (e.type === 'keypress' && e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      e.target.blur();
    } else if (e.type === 'blur') {
      addCardDesc(e.target.value, cardId);
    }
  }

  render() {
    const { description } = this.props;
    return (
      <Wrapper>
        <IconContainer>
          <DescIcon />
        </IconContainer>
        <ContentContainer>
          <Header>Description</Header>
          <DescInput
            defaultValue={description === 'no description' ? '' : description}
            innerRef={x => { this.input = x; }}
            onBlur={this.handleAddDesc}
            onKeyPress={this.handleAddDesc}
          />
        </ContentContainer>
      </Wrapper>
    );
  }
}
