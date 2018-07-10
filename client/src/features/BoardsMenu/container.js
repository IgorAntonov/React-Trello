import { connect } from 'react-redux';

import { getAllBoards } from 'Src/ducks/entities';
import { actions } from 'Src/ducks/modal';
import { BoardsMenu } from './BoardsMenu';

const { closeModal } = actions;

const mapStateToProps = state => ({
  boards: getAllBoards(state)
});

export const BoardsMenuContainer = connect(
  mapStateToProps,
  { closeModal }
)(BoardsMenu);
