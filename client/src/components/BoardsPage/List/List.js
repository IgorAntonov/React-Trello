import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import { ListHeader } from 'Components/BoardsPage/ListHeader';
import { Card, StubCard } from 'Components/BoardsPage/Card';
import { AddCard } from 'Components/BoardsPage/AddCard';
import { Wrapper, CardsWrapper } from './style';

export class List extends Component {
  static propTypes = {
    list: PropTypes.shape({}).isRequired,
    renameList: PropTypes.func.isRequired,
    boardId: PropTypes.string.isRequired
  }
  state = {
    isStubCardShow: false,
    stubCardName: null,
    isConfirmShow: false
  }
  showConfirm = () => this.setState({
    isConfirmShow: true
  });
  hideConfirm = () => this.setState({
    isConfirmShow: false
  });

  // While an api update is in progress, show a card stub
  showStubCard = cardName => {
    this.setState({
      isStubCardShow: true,
      stubCardName: cardName
    });
  }
  hideStubCard = () => {
    this.setState({
      isStubCardShow: false,
      stubCardName: null
    });
  }

  handleRenameList = e => {
    const { list, renameList } = this.props;

    if (e.type === 'keypress' && e.which === 13) {
      e.preventDefault();
      e.target.blur();
    } else if (e.type === 'blur') {
      renameList(e.target.value, list._id);
    }
  }

  render() {
    const { list, boardId } = this.props;
    const { isStubCardShow, stubCardName, isConfirmShow } = this.state;
    return (
      <Wrapper>
        <ListHeader
          title={list.title}
          listId={list._id}
          boardId={boardId}
          handleRenameList={this.handleRenameList}
          isConfirmShow={isConfirmShow}
          showConfirm={this.showConfirm}
          hideConfirm={this.hideConfirm}
        />
        <CardsWrapper>
          <Droppable droppableId={list._id} type="LIST" >
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {list.cards.map((card, index) => (
                  <Draggable draggableId={card} key={card} index={index} type="LIST" disableInteractiveElementBlocking >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card
                          cardId={card}
                          listId={list._id}
                        />
                      </div>
                    )}
                  </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {
            isStubCardShow ? <StubCard name={stubCardName} /> : null
          }
          <AddCard
            listId={list._id}
            showStubCard={this.showStubCard}
            hideStubCard={this.hideStubCard}
          />
        </CardsWrapper>
      </Wrapper>
    );
  }
}
