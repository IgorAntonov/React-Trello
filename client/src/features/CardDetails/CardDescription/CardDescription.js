import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autosize from 'autosize';

import { Row, Col, Icon } from 'Src/ui';
import { IconContainer, Header, DescInput } from './style';

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
      <Row margin="0 0 1.5rem 0">
        <IconContainer>
          <Icon icon="description" />
        </IconContainer>
        <Col grow={1} margin="0 0.75rem" padding="0 0 0 0.5rem" >
          <Header>Description</Header>
          <DescInput
            defaultValue={description === 'no description' ? '' : description}
            innerRef={x => { this.input = x; }}
            onBlur={this.handleAddDesc}
            onKeyPress={this.handleAddDesc}
          />
        </Col>
      </Row>
    );
  }
}
