import React from 'react';
import PropTypes from 'prop-types';

import { List } from 'Components/BoardsPage/List';
import { Wrapper, FlexTitle, Title, FlexBoard } from './style';

export const Board = ({ lists, renameList, boardName }) => (
  <Wrapper>
    <FlexTitle>
      <Title>{boardName}</Title>
    </FlexTitle>
    <FlexBoard>
      {lists.map(list => (
        <List
          list={list}
          renameList={renameList}
          key={list._id}
        />))
      }
    </FlexBoard>
  </Wrapper>
);

Board.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  renameList: PropTypes.func.isRequired,
  boardName: PropTypes.string.isRequired
};

