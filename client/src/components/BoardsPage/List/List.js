import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'Components/BoardsPage/Card';
import { AddCard } from 'Components/BoardsPage/AddCard';
import { Wrapper, TitleWrapper, Title, CardsWrapper } from './style';

export const List = ({ list }) => (
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
      <AddCard listId={list._id} />
    </CardsWrapper>
  </Wrapper>
);

List.propTypes = {
  list: PropTypes.shape({}).isRequired
};

