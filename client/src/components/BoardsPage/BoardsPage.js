import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { PageSpinner } from 'Components/shared';
import { Wrapper } from './style';
import { BoardsHeader } from './BoardsHeader';
import { AllBoards } from './AllBoards';
import { Board } from './Board';
import { BoardsMenu } from './BoardsMenu';
import { ThemeChanger } from './ThemeChanger';

export class BoardsPage extends PureComponent {
  componentDidMount() {
    this.props.fetchUserBoards();
    this.props.fetchTheme();
  }

  render() {
    const {
      isThemeModalOpen, match, isBoardsModalOpen, isLoadingBoards, isLoadingTheme
    } = this.props;
    const condition = isLoadingBoards || isLoadingTheme;
    return (
      condition ? <PageSpinner /> :
      <Wrapper>
        <BoardsHeader />
        <Switch>
          <Route exact path={`${match.path}`} component={AllBoards} />
          <Route path={`${match.path}/:id`} component={Board} />
        </Switch>
        {isThemeModalOpen && <ThemeChanger />}
        {isBoardsModalOpen && <BoardsMenu />}
      </Wrapper>
    );
  }
}

BoardsPage.propTypes = {
  isThemeModalOpen: PropTypes.bool.isRequired,
  isBoardsModalOpen: PropTypes.bool.isRequired,
  fetchTheme: PropTypes.func.isRequired,
  fetchUserBoards: PropTypes.func.isRequired,
  match: PropTypes.shape({}).isRequired,
  isLoadingBoards: PropTypes.bool.isRequired,
  isLoadingTheme: PropTypes.bool.isRequired
};

