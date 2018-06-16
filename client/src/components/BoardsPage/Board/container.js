import { connect } from 'react-redux';

import { getListsByBoardId, getBoardName } from 'Src/ducks/entities';
import { Board } from './Board';

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;

  return {
    lists: getListsByBoardId(state, id),
    boardName: getBoardName(state, id)
  };
};

export const BoardContainer = connect(mapStateToProps)(Board);
