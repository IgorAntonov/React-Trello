import { connect } from 'react-redux';

import { logoutUser } from 'Src/thunks/auth';
import { getUser } from 'Src/ducks/auth';
import { actions as modalActions } from 'Src/ducks/modal';
import { BoardsHeader } from './BoardsHeader';

const { openModal } = modalActions;

const mapStateToProps = state => ({
  user: getUser(state)
});

export const BoardsHeaderContainer = connect(
  mapStateToProps,
  { logoutUser, openModal }
)(BoardsHeader);
