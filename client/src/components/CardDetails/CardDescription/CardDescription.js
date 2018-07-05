import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';

import { Wrapper, IconContainer, ContentContainer, DescIcon, Header, DescInput } from './style';

export class CardDescription extends Component {
  static propTypes = {
    description: PropTypes.string.isRequired
  }
  componentDidMount = () => {
    autosize(this.input);
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
          />
        </ContentContainer>
      </Wrapper>
    );
  }
}
