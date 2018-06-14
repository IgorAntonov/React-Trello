import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { WithLoading } from 'Components/shared';
import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { AllBoards } from './AllBoards';
import { BoardsMenu } from './BoardsMenu';
import { ThemeChanger } from './ThemeChanger';

export const BoardsPage = ({
  isThemeModalOpen, fetchTheme, isLoadingTheme,
  isLoadingBoards, fetchUserBoards, match, isBoardsModalOpen
}) => (
  <WithLoading
    apiCall={[fetchTheme, fetchUserBoards]}
    isLoading={isLoadingTheme && isLoadingBoards}
    render={() => (
      <Wrapper>
        <BoardsHeader />
        <Switch>
          <Route exact path={`${match.path}`} component={AllBoards} />
          <Route path={`${match.path}/:id`} component={BoardsHeader} />
        </Switch>
        {isThemeModalOpen && <ThemeChanger />}
        {isBoardsModalOpen && <BoardsMenu />}
      </Wrapper>
    )}
  />
);

BoardsPage.propTypes = {
  isThemeModalOpen: PropTypes.bool.isRequired,
  isBoardsModalOpen: PropTypes.bool.isRequired,
  fetchTheme: PropTypes.func.isRequired,
  fetchUserBoards: PropTypes.func.isRequired,
  isLoadingTheme: PropTypes.bool.isRequired,
  isLoadingBoards: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired
};

