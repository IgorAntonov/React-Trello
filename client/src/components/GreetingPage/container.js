import { connect } from 'react-redux';

import { getIsAuth } from 'Src/ducks/auth';
import { logoutUser } from 'Src/thunks/auth';
import { GreetingPage } from './GreetingPage';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state)
});

export const GreetingPageContainer = connect(mapStateToProps, { logoutUser })(GreetingPage);
