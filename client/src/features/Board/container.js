import { connect } from 'react-redux';

import {
  renameList,
  createList,
  renameBoard,
  getListsByBoardId,
  getBoardName,
} from 'Src/ducks/entities';
import { getIsCardDetailsOpen } from 'Src/ducks/modal';
import { Board } from './Board';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    lists: getListsByBoardId(state, id),
    boardName: getBoardName(state, id),
    isCardDetailsOpen: getIsCardDetailsOpen(state)
  };
};

export const BoardContainer = connect(
  mapStateToProps,
  { renameList, createList, renameBoard }
)(Board);
