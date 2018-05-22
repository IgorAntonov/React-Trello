import { connect } from 'react-redux';

import { SignupPage } from './SignupPage';
import { signup } from '../../reducers/auth';

const mapStateToProps = state => ({
  error: state.auth.error
});

export const SignupPageContainer = connect(mapStateToProps, { signup })(SignupPage);
