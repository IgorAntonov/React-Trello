import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'Components/BoardsPage/Card';
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
    </CardsWrapper>
  </Wrapper>
);

List.propTypes = {
  list: PropTypes.shape({}).isRequired
};

