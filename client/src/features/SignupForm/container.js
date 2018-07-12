import { connect } from 'react-redux';

import { signupUser, getIsAuth, getError } from 'Src/ducks/auth';
import { SignupForm } from './SignupForm';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  error: getError(state)
});

export const SignupFormContainer = connect(
  mapStateToProps,
  { signupUser }
)(SignupForm);
