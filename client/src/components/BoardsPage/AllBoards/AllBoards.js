import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'Components/shared';
import { Wrapper, FlexTitle, Title, FlexBoards, BoardLink } from './style';

export const AllBoards = ({ boards }) => (
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

AllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired
};

