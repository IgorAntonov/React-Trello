import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from 'Src/thunks/auth';
import { HotApp } from './App';

export const AppContainer = withRouter(connect(null, { fetchUser })(HotApp));
