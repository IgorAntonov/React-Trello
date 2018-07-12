import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'Src/ui';
import {
  StyledLink,
  Wrapper,
  DeleteBtn,
  DeleteConfirm,
  ConfirmBtn,
  IconContainer
} from './style';

export class BoardLink extends Component {
  static propTypes = {
    boardId: PropTypes.string.isRequired,
    deleteBoard: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  }
  state = {
    showDeleteBtn: false,
    showDeleteConfirm: false,
    isConfirm: true
  }

  showDelete = () => this.setState({ showDeleteBtn: true });
  hideDelete = () => this.setState({ showDeleteBtn: false });

  showConfirm = () => this.setState({ showDeleteConfirm: true });
  hideConfirm = () => this.setState({
    showDeleteConfirm: false,
    isConfirm: true
  });

  confirmDelete = () => this.setState({ isConfirm: true });
  cancelDelete = () => this.setState({ isConfirm: false });

  render() {
    const { boardId, name, deleteBoard } = this.props;
    const { showDeleteBtn, showDeleteConfirm, isConfirm } = this.state;
    return (
      <Wrapper
        onMouseEnter={this.showDelete}
        onMouseLeave={this.hideDelete}
        onFocus={this.showDelete}
        onBlur={this.hideDelete}
      >
        <StyledLink to={`/boards/${boardId}`}>
          {name}
        </StyledLink>

        {showDeleteBtn &&
          <DeleteBtn onClick={this.showConfirm} >
            <Icon icon="delete" />
          </DeleteBtn>}

        {showDeleteConfirm &&
          <DeleteConfirm
            onClickOutside={this.hideConfirm}
            onClick={() => deleteBoard(boardId)}
            onMouseEnter={this.confirmDelete}
            onMouseLeave={this.cancelDelete}
          >
            <ConfirmBtn isConfirm={isConfirm}>
              Delete this board?
            </ConfirmBtn>
            <IconContainer isConfirm={isConfirm}>
              <Icon icon={isConfirm ? 'ok' : 'close'} />
            </IconContainer>
          </DeleteConfirm>}
      </Wrapper>
    );
  }
}
