import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser, getIsAuth, getIsLoading } from 'Src/ducks/auth';
import { getColors } from 'Src/ducks/theme';
import { HotApp } from './App';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  theme: getColors(state)
});

export const AppContainer = withRouter(connect(mapStateToProps, { fetchUser })(HotApp));
