import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  StyledForm, Wrapper, StyledField, Label, FormActions,
  Submit, Cancel, SubmitError
} from 'Src/ui';

const schema = yup.object().shape({
  email: yup.string().email('not valid').required('is required'),
  password: yup.string().min(6, 'must be 6 characters or longer').required('is required')
});

export const LoginForm = ({ error, isAuth, loginUser }) => {
  if (isAuth) {
    return <Redirect to="/boards" />;
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={({ email, password }, actions) => {
        actions.setSubmitting(false);
        loginUser({ email, password });
      }}
      render={({ values, errors, touched }) => (
        <StyledForm>
          <Wrapper>
            <StyledField
              warn={errors.email}
              value={values.email}
              type="email"
              name="email"
            />
            <Label>Email {touched.email && errors.email}</Label>
          </Wrapper>
          <Wrapper>
            <StyledField
              warn={errors.password}
              value={values.password}
              type="password"
              name="password"
            />
            <Label>Password {touched.password && errors.password}</Label>
          </Wrapper>
          <FormActions>
            <Cancel to="/">Cancel</Cancel>
            <Submit type="submit">LOGIN</Submit>
          </FormActions>
          <SubmitError>
            {error}
          </SubmitError>
        </StyledForm>
      )}
    />
  );
};

LoginForm.propTypes = {
  error: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired
};
