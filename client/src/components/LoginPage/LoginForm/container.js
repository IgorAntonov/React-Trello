import { connect } from 'react-redux';

import { login } from 'Thunks/auth';
import { LoginForm } from './LoginForm';

const mapStateToProps = state => ({
  auth: state.auth
});

export const LoginFormContainer = connect(mapStateToProps, { login })(LoginForm);
