import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'Components/shared';
import { Wrapper, AddButton, NewCardField, Field, FieldActions, CancelButton } from './style';

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

  showInput = () => {
    this.setState({
      showInput: true
    }, () => this.field.focus());
  }
  hideInput = () => {
    this.setState({
      showInput: false,
      cardName: ''
    });
  }
  handleChange = e => {
    this.setState({
      cardName: e.target.value
    });
  }
  submitCard = () => {
    const { cardName } = this.state;
    const {
      listId, createCard, showStubCard, hideStubCard
    } = this.props;
    showStubCard(cardName);
    this.setState({
      showInput: false,
      cardName: ''
    });
    createCard(cardName, listId, hideStubCard);
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
      <Wrapper>
        {!showInput
          ? <AddButton onClick={this.showInput} >Add a card...</AddButton> :
          <NewCardField onClickOutside={this.hideInput} >
            <Field
              innerRef={x => { this.field = x; }}
              value={cardName}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyPress}
            />
            <FieldActions>
              <Button onClick={this.submitCard} >Add</Button>
              <CancelButton onClick={this.hideInput} >
                <Icon icon="close" width="28" height="28" viewBox="48" />
              </CancelButton>
            </FieldActions>
          </NewCardField>
        }
      </Wrapper>
    );
  }
}

