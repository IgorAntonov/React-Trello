import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

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

  onDragEnd = result => {
    if (!result.destination) {
      return;
    }
  }

  render() {
    const {
      isThemeModalOpen, match, isBoardsModalOpen, isLoadingBoards, isLoadingTheme
    } = this.props;
    const condition = isLoadingBoards || isLoadingTheme;
    return (
      condition ? <PageSpinner /> :
      <DragDropContext onDragEnd={this.onDragEnd} >
        <Wrapper>
          <BoardsHeader />
          <Switch>
            <Route exact path={`${match.path}`} component={AllBoards} />
            <Route path={`${match.path}/:id`} component={Board} />
          </Switch>
          {isThemeModalOpen && <ThemeChanger />}
          {isBoardsModalOpen && <BoardsMenu />}
        </Wrapper>
      </DragDropContext>
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

