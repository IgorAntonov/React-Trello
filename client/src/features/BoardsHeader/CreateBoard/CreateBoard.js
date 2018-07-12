import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'Src/ui';
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

  handleChange = e => this.setState({
    name: e.target.value
  });

  hideInput = () => this.setState({
    showCreateInput: false,
    name: ''
  });

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
    if (e.which === 27) {
      this.hideInput();
    }
  }
  render() {
    const { showCreateInput, name } = this.state;
    return (
      <Wrapper onClickOutside={this.hideInput}>
        {showCreateInput &&
          <CreateInput
            value={name}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
            innerRef={x => { this.input = x; }}
          />}
        <CreateButton onClick={this.handleClick} >
          <Icon icon={showCreateInput ? 'ok' : 'plus'} />
        </CreateButton>
      </Wrapper>
    );
  }
}
