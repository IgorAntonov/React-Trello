import { connect } from 'react-redux';

import { signup } from 'Src/thunks/auth';
import { SignupForm } from './SignupForm';

const mapStateToProps = state => ({
  auth: state.auth
});

export const SignupFormContainer = connect(mapStateToProps, { signup })(SignupForm);
