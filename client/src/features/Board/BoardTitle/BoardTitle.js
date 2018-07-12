import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { RenameInput } from './style';

export class BoardTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    boardId: PropTypes.string.isRequired,
    renameBoard: PropTypes.func.isRequired
  }

  handleRenameBoard = e => {
    const { boardId, renameBoard } = this.props;
    if (e.type === 'keypress' && e.which === 13) {
      e.preventDefault();
      e.target.blur();
    } else if (e.type === 'blur') {
      renameBoard(e.target.value, boardId);
    }
  }

  render() {
    const { title } = this.props;
    return (
      <RenameInput
        defaultValue={title}
        onBlur={this.handleRenameBoard}
        onKeyPress={this.handleRenameBoard}
      />
    );
  }
}

