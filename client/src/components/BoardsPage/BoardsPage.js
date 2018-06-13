import React from 'react';
import PropTypes from 'prop-types';

import { WithLoading } from 'Components/shared';
import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { AllBoards } from './AllBoards';
import { ThemeChanger } from './ThemeChanger';

export const BoardsPage = ({
  isModalOpen, fetchTheme, isLoadingTheme, isLoadingBoards, fetchUserBoards
}) => (
  <WithLoading
    apiCall={[fetchTheme, fetchUserBoards]}
    isLoading={isLoadingTheme && isLoadingBoards}
    type="page"
    render={() => (
      <Wrapper>
        <BoardsHeader />
        <AllBoards />
        {isModalOpen && <ThemeChanger />}
      </Wrapper>
    )}
  />
);

BoardsPage.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  fetchTheme: PropTypes.func.isRequired,
  fetchUserBoards: PropTypes.func.isRequired,
  isLoadingTheme: PropTypes.bool.isRequired,
  isLoadingBoards: PropTypes.bool.isRequired
};

