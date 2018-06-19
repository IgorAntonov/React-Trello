import React, { Component } from 'react';

import { Button, Icon } from 'Components/shared';
import { Wrapper, AddButton, NewCardField, Field, FieldActions, CancelButton } from './style';

export class AddCard extends Component {
  state = {
    showInput: false
  }
  toggleInput = () => {
    this.setState(prevState => ({
      showInput: !prevState.showInput
    }));
  }

  render() {
    const { showInput } = this.state;
    return (
      <Wrapper>
        {!showInput
          ? <AddButton onClick={this.toggleInput} >Add a card...</AddButton> :
          <NewCardField>
            <Field />
            <FieldActions>
              <Button>Add</Button>
              <CancelButton onClick={this.toggleInput} >
                <Icon icon="close" width="28" height="28" viewBox="48" />
              </CancelButton>
            </FieldActions>
          </NewCardField>
        }
      </Wrapper>
    );
  }
}

