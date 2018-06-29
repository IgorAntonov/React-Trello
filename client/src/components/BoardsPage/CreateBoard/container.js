import { connect } from 'react-redux';

import { createBoard } from 'Src/thunks/boards';
import { CreateBoard } from './CreateBoard';

export const CreateBoardContainer = connect(null, { createBoard })(CreateBoard);
