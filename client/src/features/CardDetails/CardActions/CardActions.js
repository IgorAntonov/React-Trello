import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import { Icon } from 'Src/ui';
import { Wrapper, IconWrapper, DeleteBtn } from './style';

export class CardActions extends Component {
  static propTypes ={
    cardId: PropTypes.string.isRequired,
    listId: PropTypes.string.isRequired,
    closeCardDetails: PropTypes.func.isRequired,
    deleteCard: PropTypes.func.isRequired
  }
  state = { showDeleteConfirm: false };

  showConfirm = () => this.setState({
    showDeleteConfirm: true
  });
  hideConfirm = () => this.setState({
    showDeleteConfirm: false
  });
  handleDelete = () => {
    const {
      cardId, listId, deleteCard, closeCardDetails
    } = this.props;
    deleteCard(cardId, listId);
    closeCardDetails();
  }

  render() {
    const { closeCardDetails } = this.props;
    const { showDeleteConfirm } = this.state;
    return (
      <Wrapper>
        <IconWrapper onClick={closeCardDetails} >
          <Icon icon="close" />
        </IconWrapper>
        {showDeleteConfirm ?
          <ClickOutside onClickOutside={this.hideConfirm} >
            <DeleteBtn onClick={this.handleDelete} >
              Delete this card
            </DeleteBtn>
          </ClickOutside> :
          <IconWrapper onClick={this.showConfirm} >
            <Icon icon="delete" />
          </IconWrapper>
        }
      </Wrapper>
    );
  }
}
