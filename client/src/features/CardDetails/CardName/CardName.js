import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Icon } from 'Src/ui';
import { IconContainer, NameInput, Span } from './style';

export class CardName extends Component {
  static propTypes = {
    cardName: PropTypes.string.isRequired,
    listTitle: PropTypes.string.isRequired,
    renameCard: PropTypes.func.isRequired,
    cardId: PropTypes.string.isRequired
  }

  handleRenameCard = e => {
    const { cardId, renameCard } = this.props;
    if (e.type === 'keypress' && e.which === 13) {
      e.preventDefault();
      e.target.blur();
    } else if (e.type === 'blur') {
      renameCard(e.target.value, cardId);
    }
  }

  render() {
    const { cardName, listTitle } = this.props;
    return (
      <Row margin="0 0 1.5rem 0">
        <IconContainer>
          <Icon icon="title" />
        </IconContainer>
        <Col grow={1} margin="0 0.75rem">
          <NameInput
            defaultValue={cardName}
            onBlur={this.handleRenameCard}
            onKeyPress={this.handleRenameCard}
          />
          <Span>in list {listTitle}</Span>
        </Col>
      </Row>
    );
  }
}
