import { connect } from 'react-redux';

import { getAllBoards } from 'Src/ducks/boards';
import { AllBoards } from './AllBoards';

const mapStateToProps = state => ({
  boards: getAllBoards(state)
});

export const AllBoardsContainer = connect(mapStateToProps)(AllBoards);

