import { connect } from 'react-redux';

import { createBoard } from 'Src/thunks/boards';
import { AddBoard } from './AddBoard';

export const AddBoardContainer = connect(null, { createBoard })(AddBoard);
