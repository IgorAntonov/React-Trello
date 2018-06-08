import { connect } from 'react-redux';

import { logout } from 'Src/thunks/auth';
import { actions as modalActions } from 'Src/ducks/modal';
import { BoardsHeader } from './BoardsHeader';

const { openModal } = modalActions;

export const BoardsHeaderContainer = connect(null, { logout, openModal })(BoardsHeader);
