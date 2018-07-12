import { connect } from 'react-redux';

import { deleteBoard, getAllBoards } from 'Src/ducks/entities';
import { AllBoards } from './AllBoards';

const mapStateToProps = state => ({
  boards: getAllBoards(state),
});

export const AllBoardsContainer = connect(
  mapStateToProps,
  { deleteBoard }
)(AllBoards);

