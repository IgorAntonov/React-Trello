import { connect } from 'react-redux';

import { loginUser, getIsAuth, getIsLoading, getError } from 'Src/ducks/auth';
import { LoginForm } from './LoginForm';

const mapStateToProps = state => ({
  isAuth: getIsAuth(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});

export const LoginFormContainer = connect(mapStateToProps, { loginUser })(LoginForm);
