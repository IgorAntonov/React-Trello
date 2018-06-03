import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from 'Src/thunks/auth';
import { HotApp } from './App';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export const AppContainer = withRouter(connect(mapStateToProps, { fetchUser })(HotApp));
