import { connect } from 'react-redux';

import { createBoard } from 'Src/ducks/entities';
import { CreateBoard } from './CreateBoard';

export const CreateBoardContainer = connect(null, { createBoard })(CreateBoard);
