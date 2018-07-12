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
  name: yup.string().required('is required'),
  password: yup.string().min(6, 'must be 6 characters or longer').required('is required')
});

export const SignupForm = ({ error, isAuth, signupUser }) => {
  if (isAuth) {
    return <Redirect to="/boards" />;
  }
  return (
    <Formik
      initialValues={{ email: '', name: '', password: '' }}
      validationSchema={schema}
      onSubmit={({ name, email, password }, actions) => {
        actions.setSubmitting(false);
        signupUser({ name, email, password });
      }}
      render={({ values, errors, touched }) => (
        <StyledForm>
          <Wrapper>
            <StyledField
              warn={errors.name}
              value={values.name}
              type="text"
              name="name"
            />
            <Label>Name {touched.name && errors.name}</Label>
          </Wrapper>
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
            <Submit type="submit">SIGNUP</Submit>
          </FormActions>
          <SubmitError>
            {error}
          </SubmitError>
        </StyledForm>
      )}
    />
  );
};

SignupForm.propTypes = {
  error: PropTypes.string.isRequired,
  isAuth: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired
};
