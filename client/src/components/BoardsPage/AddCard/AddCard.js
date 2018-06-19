import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'Components/shared';
import { Wrapper, AddButton, NewCardField, Field, FieldActions, CancelButton } from './style';

export class AddCard extends Component {
  static propTypes = {
    listId: PropTypes.string.isRequired,
    createCard: PropTypes.func.isRequired
  }
  state = {
    showInput: false,
    cardName: ''
  }

  showInput = () => {
    this.setState({
      showInput: true
    });
  }
  hideInput = () => {
    this.setState({
      showInput: false
    });
  }
  handleChange = e => {
    this.setState({
      cardName: e.target.value
    });
  }
  handleClick = () => {
    const { cardName } = this.state;
    const { listId, createCard } = this.props;
    createCard(cardName, listId);
    this.setState({
      showInput: false,
      cardName: ''
    });
  }

  render() {
    const { showInput, cardName } = this.state;
    return (
      <Wrapper>
        {!showInput
          ? <AddButton onClick={this.showInput} >Add a card...</AddButton> :
          <NewCardField onClickOutside={this.hideInput} >
            <Field value={cardName} onChange={this.handleChange} />
            <FieldActions>
              <Button onClick={this.handleClick} >Add</Button>
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

