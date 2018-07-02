import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBoard } from 'Src/ducks/entities';
import { CreateBoard } from './CreateBoard';

export const CreateBoardContainer = withRouter(connect(null, { createBoard })(CreateBoard));
