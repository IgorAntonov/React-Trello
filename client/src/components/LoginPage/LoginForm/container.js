import { connect } from 'react-redux';

import { login } from 'Src/thunks/auth';
import { LoginForm } from './LoginForm';

const mapStateToProps = state => ({
  auth: state.auth
});

export const LoginFormContainer = connect(mapStateToProps, { login })(LoginForm);
