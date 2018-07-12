import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';

import { BoardsHeader } from 'Src/features/BoardsHeader';
import { BoardsMenu } from 'Src/features/BoardsMenu';
import { ThemeChanger } from 'Src/features/ThemeChanger';
import { AllBoards } from 'Src/features/AllBoards';
import { Board } from 'Src/features/Board';
import { PageSpinner, FlexPage } from 'Src/ui';

export class BoardsPage extends PureComponent {
  static propTypes = {
    isThemeModalOpen: PropTypes.bool.isRequired,
    isBoardsModalOpen: PropTypes.bool.isRequired,
    isLoadingBoards: PropTypes.bool.isRequired,
    isLoadingTheme: PropTypes.bool.isRequired,
    fetchTheme: PropTypes.func.isRequired,
    fetchUserBoards: PropTypes.func.isRequired,
    reorderList: PropTypes.func.isRequired,
    moveFromToList: PropTypes.func.isRequired,
    match: PropTypes.shape({}).isRequired
  }

  componentDidMount() {
    this.props.fetchUserBoards();
    this.props.fetchTheme();
  }

  onDragEnd = result => {
    const { reorderList, moveFromToList } = this.props;
    const { source, destination, draggableId } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      reorderList(
        source.droppableId,
        draggableId,
        source.index,
        destination.index
      );
    }
    if (source.droppableId !== destination.droppableId) {
      moveFromToList(
        source.droppableId,
        destination.droppableId,
        draggableId,
        source.index,
        destination.index
      );
    }
  }

  render() {
    const {
      isThemeModalOpen,
      isBoardsModalOpen,
      isLoadingBoards,
      isLoadingTheme,
      match
    } = this.props;
    const condition = isLoadingBoards || isLoadingTheme;

    if (condition) {
      return <PageSpinner />;
    }
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <FlexPage>
          <BoardsHeader />
          <Switch>
            <Route exact path={`${match.path}`} component={AllBoards} />
            <Route path={`${match.path}/:id`} component={Board} />
          </Switch>
          {isThemeModalOpen && <ThemeChanger />}
          {isBoardsModalOpen && <BoardsMenu />}
        </FlexPage>
      </DragDropContext>
    );
  }
}
