import { connect } from 'react-redux';

import { renameBoard } from 'Src/thunks/boards';
import { BoardTitle } from './BoardTitle';

export const BoardTitleContainer = connect(null, { renameBoard })(BoardTitle);
