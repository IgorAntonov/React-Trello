import { connect } from 'react-redux';

import { SignupPage } from './SignupPage';
import { signup } from '../../thunks/auth';

const mapStateToProps = state => ({
  auth: state.auth
});

export const SignupPageContainer = connect(mapStateToProps, { signup })(SignupPage);
