import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { AllBoards } from './AllBoards';
import { ThemeChanger } from './ThemeChanger';

export const BoardsPage = ({ isModalOpen }) => (
  <Wrapper>
    <BoardsHeader />
    <AllBoards />
    {isModalOpen && <ThemeChanger />}
  </Wrapper>
);

BoardsPage.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};

