import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Button, Icon } from 'Src/ui';
import {
  AddButton,
  NewCardField,
  PosedField,
  CancelButton
} from './style';

export class AddCard extends Component {
  static propTypes = {
    listId: PropTypes.string.isRequired,
    createCard: PropTypes.func.isRequired,
    showStubCard: PropTypes.func.isRequired,
    hideStubCard: PropTypes.func.isRequired
  }
  state = {
    showInput: false,
    cardName: ''
  }

  showInput = () => this.setState(
    { showInput: true },
    () => this.field.focus()
  );
  hideInput = () => this.setState({
    showInput: false,
    cardName: ''
  });

  handleChange = e => this.setState({
    cardName: e.target.value
  });

  submitCard = () => {
    const { cardName } = this.state;
    const {
      listId, createCard, showStubCard, hideStubCard
    } = this.props;
    showStubCard(cardName);
    createCard(cardName, listId, hideStubCard);
    this.hideInput();
  }
  handleKeyPress = e => {
    if (e.which === 13 && !e.shiftKey) {
      this.submitCard();
    }
    if (e.which === 27) {
      this.hideInput();
    }
  }

  render() {
    const { showInput, cardName } = this.state;
    return (
      <Row grow={1}>
        {!showInput
          ? <AddButton onClick={this.showInput}>Add a card...</AddButton> :
          <NewCardField onClickOutside={this.hideInput}>
            <PosedField
              innerRef={x => { this.field = x; }}
              value={cardName}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyPress}
              initialPose="init"
              pose="open"
            />
            <Row padding="0.5rem 0">
              <Button onClick={this.submitCard} >Add</Button>
              <CancelButton onClick={this.hideInput} >
                <Icon icon="close" width="28" height="28" />
              </CancelButton>
            </Row>
          </NewCardField>}
      </Row>
    );
  }
}

