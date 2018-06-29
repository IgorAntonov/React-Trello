import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, AddButton, BoardInput } from './style';

export class AddBoard extends Component {
  static propTypes = {
    createBoard: PropTypes.func.isRequired
  }
  state = {
    showCreateInput: false,
    name: ''
  }

  showInput = () => {
    this.setState({
      showCreateInput: true
    }, () => this.input.focus());
  }
  hideInput = () => {
    this.setState({
      showCreateInput: false,
      name: ''
    });
  }
  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  }
  handleKeyPress = e => {
    const { name } = this.state;
    const { createBoard } = this.props;
    if (e.which === 13) {
      if (name.length !== 0) createBoard(name);
      this.hideInput();
    }
  }

  render() {
    const { showCreateInput, name } = this.state;
    return (
      <Wrapper onClickOutside={this.hideInput} >
        {showCreateInput ?
          <BoardInput
            innerRef={x => { this.input = x; }}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
            value={name}
          /> :
          <AddButton onClick={this.showInput} >
            Create new board...
          </AddButton>
        }
      </Wrapper>
    );
  }
}
