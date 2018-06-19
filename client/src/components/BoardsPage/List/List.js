import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, StubCard } from 'Components/BoardsPage/Card';
import { AddCard } from 'Components/BoardsPage/AddCard';
import { Wrapper, TitleWrapper, Title, CardsWrapper } from './style';

export class List extends Component {
  state = {
    isStubCardShow: false,
    stubCardName: null
  }
  /*
    While an api update is in progress, show a card stub
  */
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

  render() {
    const { list } = this.props;
    const { isStubCardShow, stubCardName } = this.state;
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>{list.title}</Title>
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

List.propTypes = {
  list: PropTypes.shape({}).isRequired
};

