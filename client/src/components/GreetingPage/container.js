import { connect } from 'react-redux';

import { GreetingPage } from './GreetingPage';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export const GreetingPageContainer = connect(mapStateToProps)(GreetingPage);
