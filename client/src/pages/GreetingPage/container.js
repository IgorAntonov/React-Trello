import { connect } from 'react-redux';

import { loginUser, getIsAuth } from 'Src/ducks/auth';
import { GreetingPage } from './GreetingPage';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
});

export const GreetingPageContainer = connect(
  mapStateToProps,
  { loginUser }
)(GreetingPage);
