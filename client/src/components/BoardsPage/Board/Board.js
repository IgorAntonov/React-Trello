import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { List } from 'Components/BoardsPage/List';
import { BoardTitle } from 'Components/BoardsPage/BoardTitle';
import { AddList } from 'Components/BoardsPage/AddList';
import { CardDetails } from 'Components/CardDetails';
import { Wrapper, FlexTitle, FlexBoard } from './style';

export const Board = ({
  lists, renameList, boardName, isCardDetailsOpen, match
}) => (
  <Fragment>
    <Wrapper>
      <FlexTitle>
        <BoardTitle
          title={boardName}
          key={match.params.id}
          boardId={match.params.id}
        />
      </FlexTitle>
      <FlexBoard>
        {lists.map(list => (
          <List
            list={list}
            renameList={renameList}
            boardId={match.params.id}
            key={list._id}
          />
        ))}
        <AddList boardId={match.params.id} />
      </FlexBoard>
    </Wrapper>
    {isCardDetailsOpen &&
      <CardDetails />
    }
  </Fragment>
);

Board.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  renameList: PropTypes.func.isRequired,
  boardName: PropTypes.string.isRequired,
  isCardDetailsOpen: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired
};

