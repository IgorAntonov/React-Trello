import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, IconContainer, ContentContainer, TitleIcon, NameInput, Span } from './style';

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
      <Wrapper>
        <IconContainer>
          <TitleIcon />
        </IconContainer>
        <ContentContainer>
          <NameInput
            defaultValue={cardName}
            onBlur={this.handleRenameCard}
            onKeyPress={this.handleRenameCard}
          />
          <Span>in list {listTitle}</Span>
        </ContentContainer>
      </Wrapper>
    );
  }
}
