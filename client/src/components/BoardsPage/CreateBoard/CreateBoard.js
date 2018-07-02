import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import { Icon } from 'Components/shared';
import { Wrapper, CreateButton, CreateInput } from './style';

export class CreateBoard extends Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired,
    history: PropTypes.shape({}).isRequired
  }
  state = {
    showCreateInput: false,
    name: ''
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }
  hideInput = () => {
    this.setState({
      showCreateInput: false,
      name: ''
    });
  }
  submitBoard = () => {
    const { name } = this.state;
    const { createBoard, history } = this.props;
    if (name.length !== 0) {
      const cb = id => history.push(`/boards/${id}`);
      createBoard(name, cb);
    }
  }

  handleClick = () => {
    const cb = () => (this.state.showCreateInput ? this.input.focus() : this.submitBoard());
    this.setState(prevState => ({
      showCreateInput: !prevState.showCreateInput
    }), cb);
  }
  handleKeyPress = e => {
    if (e.which === 13) {
      this.submitBoard();
      this.hideInput();
    }
  }
  render() {
    const { showCreateInput, name } = this.state;
    return (
      <ClickOutside onClickOutside={this.hideInput} >
        <Wrapper >
          {showCreateInput &&
            <CreateInput
              onChange={this.handleChange}
              value={name}
              innerRef={x => { this.input = x; }}
              onKeyPress={this.handleKeyPress}
            />
          }
          <CreateButton onClick={this.handleClick} >
            <Icon
              icon={showCreateInput ? 'ok' : 'plus'}
              width="24px"
              height="24px"
              viewBox="48"
            />
          </CreateButton>
        </Wrapper>
      </ClickOutside>
    );
  }
}
