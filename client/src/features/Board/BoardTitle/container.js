import { connect } from 'react-redux';

import { renameBoard } from 'Src/ducks/entities';
import { BoardTitle } from './BoardTitle';

export const BoardTitleContainer = connect(null, { renameBoard })(BoardTitle);
