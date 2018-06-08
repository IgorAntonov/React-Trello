import { connect } from 'react-redux';

import { getIsAuth, getIsLoading, getError } from 'Src/ducks/auth';
import { signup } from 'Src/thunks/auth';
import { SignupForm } from './SignupForm';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

export const SignupFormContainer = connect(mapStateToProps, { signup })(SignupForm);
