import { connect } from 'react-redux';

import { LoginForm } from './LoginForm';
import { login } from '../../../thunks/auth';

const mapStateToProps = state => ({
  auth: state.auth
});

export const LoginFormContainer = connect(mapStateToProps, { login })(LoginForm);
