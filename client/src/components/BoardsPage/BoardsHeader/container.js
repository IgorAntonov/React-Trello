import { connect } from 'react-redux';

import { logout } from 'Src/thunks/auth';
import { BoardsHeader } from './BoardsHeader';

export const BoardsHeaderContainer = connect(null, { logout })(BoardsHeader);
