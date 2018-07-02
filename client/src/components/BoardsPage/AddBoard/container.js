import { connect } from 'react-redux';

import { createBoard } from 'Src/ducks/entities';
import { AddBoard } from './AddBoard';

export const AddBoardContainer = connect(null, { createBoard })(AddBoard);
