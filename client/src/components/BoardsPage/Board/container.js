import { connect } from 'react-redux';

import { getUser } from 'Src/ducks/auth';
import { Board } from './Board';

const mapStateToProps = state => ({
  user: getUser(state)
});

export const BoardContainer = connect(mapStateToProps)(Board);
