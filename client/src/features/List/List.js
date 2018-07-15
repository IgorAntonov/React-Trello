import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';

import { DraggableCard } from './DraggableCard';
import { ListHeader } from './ListHeader';
import { StubCard } from './StubCard';
import { AddCard } from './AddCard';
import { CardsWrapper, Posed } from './style';

export class List extends Component {
  static propTypes = {
    list: PropTypes.shape({
      _id: PropTypes.string,
      title: PropTypes.string,
      cards: PropTypes.array
    }).isRequired,
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
  showStubCard = cardName => this.setState({
    isStubCardShow: true,
    stubCardName: cardName
  });
  hideStubCard = () => this.setState({
    isStubCardShow: false,
    stubCardName: null
  });

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
      <Posed initialPose="init" pose="open" >
        <ListHeader
          title={list.title}
          listId={list._id}
          boardId={boardId}
          renameList={this.handleRenameList}
          isConfirmShow={isConfirmShow}
          showConfirm={this.showConfirm}
          hideConfirm={this.hideConfirm}
        />
        <CardsWrapper>
          <Droppable droppableId={list._id} type="LIST" >
            {provided => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{ minHeight: '10px' }}
              >
                {list.cards.map((card, index) => (
                  <DraggableCard
                    card={card}
                    key={card}
                    index={index}
                    listId={list._id}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {isStubCardShow && <StubCard name={stubCardName} />}
          <AddCard
            listId={list._id}
            showStubCard={this.showStubCard}
            hideStubCard={this.hideStubCard}
          />
        </CardsWrapper>
      </Posed>
    );
  }
}
