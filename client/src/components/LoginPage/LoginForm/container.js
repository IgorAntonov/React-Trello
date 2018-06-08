import { connect } from 'react-redux';

import { getIsAuth, getIsLoading, getError } from 'Src/ducks/auth';
import { login } from 'Src/thunks/auth';
import { LoginForm } from './LoginForm';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

export const LoginFormContainer = connect(mapStateToProps, { login })(LoginForm);
