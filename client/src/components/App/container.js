import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { HotApp } from './App';
import { fetchUser } from '../../thunks/auth';

export const AppContainer = withRouter(connect(null, { fetchUser })(HotApp));
