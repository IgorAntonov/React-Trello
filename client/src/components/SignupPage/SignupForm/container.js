import { connect } from 'react-redux';

import { SignupForm } from './SignupForm';
import { signup } from '../../../thunks/auth';

const mapStateToProps = state => ({
  auth: state.auth
});

export const SignupFormContainer = connect(mapStateToProps, { signup })(SignupForm);
