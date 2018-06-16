import { connect } from 'react-redux';

import { getIsLoading as getIsLoadingTheme } from 'Src/ducks/theme';
import { getAllBoards, getIsLoading as getIsLoadingBoards } from 'Src/ducks/entities';
import { AllBoardsWithLoading } from './AllBoards';

const mapStateToProps = state => ({
  boards: getAllBoards(state),
  isLoadingTheme: getIsLoadingTheme(state),
  isLoading: getIsLoadingBoards(state)
});

export const AllBoardsContainer = connect(mapStateToProps)(AllBoardsWithLoading);

