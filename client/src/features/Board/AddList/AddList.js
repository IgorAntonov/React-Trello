import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Icon, Button } from 'Src/ui';
import {
  Wrapper,
  AddButton,
  Field,
  NewCardField,
  CancelButton
} from './style';

export class AddList extends Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    createList: PropTypes.func.isRequired
  }
  state = {
    showInput: false,
    listName: ''
  }
  field = React.createRef();
  showInput = () => this.setState(
    { showInput: true },
    () => this.field.current.focus()
  );
  hideInput = () => this.setState({
    showInput: false,
    listName: ''
  });
  handleChange = e => this.setState({
    listName: e.target.value
  });

  submitList = () => {
    const { listName } = this.state;
    const { boardId, createList } = this.props;
    createList(boardId, listName);
    this.hideInput();
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
              innerRef={this.field}
              onKeyDown={this.handleKeyPress}
            />
            <Row padding="0.5rem 0">
              <Button onClick={this.submitList} >Add</Button>
              <CancelButton onClick={this.hideInput} >
                <Icon icon="close" width="28" height="28" />
              </CancelButton>
            </Row>
          </NewCardField>}
      </Wrapper>
    );
  }
}
