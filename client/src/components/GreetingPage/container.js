import { connect } from 'react-redux';

import { logout } from 'Src/thunks/auth';
import { GreetingPage } from './GreetingPage';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export const GreetingPageContainer = connect(mapStateToProps, { logout })(GreetingPage);
