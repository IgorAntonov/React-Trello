import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createBoard } from 'Src/ducks/entities';
import { AddBoard } from './AddBoard';

export const AddBoardContainer = compose(
  withRouter,
  connect(null, { createBoard })
)(AddBoard);
