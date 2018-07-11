import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon, Button } from 'Src/ui';
import { Wrapper, AddButton, Field, FieldActions, NewCardField, CancelButton } from './style';

export class AddList extends Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    createList: PropTypes.func.isRequired
  }
  state = {
    showInput: false,
    listName: ''
  }

  showInput = () => {
    this.setState({
      showInput: true
    }, () => this.field.focus());
  }
  hideInput = () => {
    this.setState({
      showInput: false,
      listName: ''
    });
  }
  handleChange = e => {
    this.setState({
      listName: e.target.value
    });
  }
  submitList = () => {
    const { listName } = this.state;
    const { boardId, createList } = this.props;
    this.setState({
      showInput: false,
      listName: ''
    });
    createList(boardId, listName);
  }
  handleKeyPress = e => {
    if (e.which === 13 && !e.shiftKey) {
      this.submitList();
    }
    if (e.which === 27) {
      this.hideInput();
    }
  }

  render() {
    const { showInput, listName } = this.state;
    return (
      <Wrapper>
        {!showInput
          ? <AddButton onClick={this.showInput} >Add a list...</AddButton> :
          <NewCardField onClickOutside={this.hideInput} >
            <Field
              value={listName}
              onChange={this.handleChange}
              innerRef={x => { this.field = x; }}
              onKeyDown={this.handleKeyPress}
            />
            <FieldActions>
              <Button onClick={this.submitList} >Add</Button>
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
