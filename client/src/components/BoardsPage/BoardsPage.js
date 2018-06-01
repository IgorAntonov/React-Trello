import React from 'react';

import { Wrapper, Board } from './style';
import { BoardsHeader } from './BoardsHeader';

export const BoardsPage = () => (
  <Wrapper>
    <BoardsHeader />
    <Board>Board</Board>
  </Wrapper>
);
