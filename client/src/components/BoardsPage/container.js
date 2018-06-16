import { connect } from 'react-redux';

import { fetchUserBoards } from 'Src/thunks/entities';
import { fetchTheme } from 'Src/thunks/theme';
import { getIsLoading as getIsLoadingBoards } from 'Src/ducks/entities';
import { getIsLoading as getIsLoadingTheme } from 'Src/ducks/theme';
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
  { fetchUserBoards, fetchTheme }
)(BoardsPage);
