import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from 'Thunks/auth';
import { HotApp } from './App';

export const AppContainer = withRouter(connect(null, { fetchUser })(HotApp));
