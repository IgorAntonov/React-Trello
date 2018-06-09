import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { Board } from './Board';
import { ThemeChanger } from './ThemeChanger';

export const BoardsPage = ({ isModalOpen, closeModal }) => (
  <Wrapper>
    <BoardsHeader />
    <Board>Board</Board>
    {isModalOpen && <ThemeChanger closeModal={closeModal} />}
  </Wrapper>
);

BoardsPage.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

