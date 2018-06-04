import React from 'react';
import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { Board } from './Board';

export const BoardsPage = () => (
  <Wrapper>
    <BoardsHeader />
    <Board>Board</Board>
  </Wrapper>
);
