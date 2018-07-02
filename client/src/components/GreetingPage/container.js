import { connect } from 'react-redux';

import { logoutUser, getIsAuth } from 'Src/ducks/auth';
import { GreetingPage } from './GreetingPage';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
});

export const GreetingPageContainer = connect(mapStateToProps, { logoutUser })(GreetingPage);
