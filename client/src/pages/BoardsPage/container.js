import { connect } from 'react-redux';

import {
  reorderList,
  moveFromToList,
  fetchUserBoards,
  getIsLoading as getIsLoadingBoards
} from 'Src/ducks/entities';
import { fetchTheme, getIsLoading as getIsLoadingTheme } from 'Src/ducks/theme';
import { getIsThemeModalOpen, getIsBoardsModalOpen } from 'Src/ducks/modal';
import { BoardsPage } from './BoardsPage';


const mapStateToProps = state => ({
  isThemeModalOpen: getIsThemeModalOpen(state),
  isBoardsModalOpen: getIsBoardsModalOpen(state),
  isLoadingBoards: getIsLoadingBoards(state),
  isLoadingTheme: getIsLoadingTheme(state)
});

export const BoardsPageContainer = connect(
  mapStateToProps,
  {
    fetchUserBoards,
    fetchTheme,
    reorderList,
    moveFromToList
  }
)(BoardsPage);
