import { connect } from 'react-redux';

import { fetchUserBoards } from 'Src/thunks/boards';
import { fetchTheme } from 'Src/thunks/theme';
import { getIsModalOpen } from 'Src/ducks/modal';
import { getIsLoading as getIsLoadingTheme } from 'Src/ducks/theme';
import { getIsLoading as getIsLoadingBoards } from 'Src/ducks/boards';

import { BoardsPage } from './BoardsPage';


const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state),
  isLoadingTheme: getIsLoadingTheme(state),
  isLoadingBoards: getIsLoadingBoards(state)
});

export const BoardsPageContainer = connect(
  mapStateToProps,
  { fetchUserBoards, fetchTheme }
)(BoardsPage);
