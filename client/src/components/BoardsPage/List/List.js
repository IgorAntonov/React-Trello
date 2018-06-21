import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, StubCard } from 'Components/BoardsPage/Card';
import { AddCard } from 'Components/BoardsPage/AddCard';
import { Wrapper, TitleWrapper, Title, CardsWrapper } from './style';

export class List extends Component {
  static propTypes = {
    list: PropTypes.shape({}).isRequired,
    renameList: PropTypes.func.isRequired
  }
  state = {
    isStubCardShow: false,
    stubCardName: null
  }
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
    const { list } = this.props;
    const { isStubCardShow, stubCardName } = this.state;
    return (
      <Wrapper>
        <TitleWrapper>
          <Title
            defaultValue={list.title}
            onBlur={this.handleRenameList}
            onKeyPress={this.handleRenameList}
          />
        </TitleWrapper>
        <CardsWrapper>
          {list.cards.map(card => (
            <Card
              cardId={card}
              key={card}
            />))
          }
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
