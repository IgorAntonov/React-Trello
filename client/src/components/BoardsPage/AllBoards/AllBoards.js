import React from 'react';
import PropTypes from 'prop-types';

import { Icon, withLoading } from 'Components/shared';
import { Wrapper, FlexTitle, Title, FlexBoards, BoardLink } from './style';

const AllBoards = ({ boards }) => (
  <Wrapper>
    <FlexTitle>
      <Icon icon="portrait" width="30px" height="30px" viewBox="48" />
      <Title>My Boards</Title>
    </FlexTitle>

    <FlexBoards>
      {boards.map(board => (
        <BoardLink
          to={`/boards/${board._id}`}
          key={board._id}
        >
          {board.name}
        </BoardLink>
      ))}
    </FlexBoards>
  </Wrapper>
);

export const AllBoardsWithLoading = withLoading(AllBoards);

AllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired
};

