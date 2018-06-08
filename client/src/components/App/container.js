import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getIsAuth, getIsLoading } from 'Src/ducks/auth';
import { getTheme } from 'Src/ducks/theme';
import { fetchUser } from 'Src/thunks/auth';
import { HotApp } from './App';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  theme: getTheme(state)
});

export const AppContainer = withRouter(connect(mapStateToProps, { fetchUser })(HotApp));
