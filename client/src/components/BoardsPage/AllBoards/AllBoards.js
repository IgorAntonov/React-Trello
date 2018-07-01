import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'Components/shared';
import { AddBoard } from 'Components/BoardsPage/AddBoard';
import { BoardLink } from 'Components/BoardsPage/BoardLink';
import { Wrapper, FlexTitle, Title, FlexBoards } from './style';

export const AllBoards = ({ boards, deleteBoard }) => (
  <Wrapper>
    <FlexTitle>
      <Icon icon="portrait" width="30px" height="30px" viewBox="48" />
      <Title>My Boards</Title>
    </FlexTitle>

    <FlexBoards>
      {boards.map(board => (
        <BoardLink
          boardId={board._id}
          deleteBoard={deleteBoard}
          name={board.name}
          key={board._id}
        />
      ))}
      <AddBoard />
    </FlexBoards>
  </Wrapper>
);

AllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBoard: PropTypes.func.isRequired
};

