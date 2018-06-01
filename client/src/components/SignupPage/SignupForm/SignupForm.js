import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import {
  Form, Input, Field, Label, FormActions,
  Submit, Cancel, LoadingSpinner, SubmitError
} from 'Shared';

export class SignupForm extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    auth: PropTypes.shape({
      error: PropTypes.string.isRequired,
      isLoading: PropTypes.bool.isRequired,
      user: PropTypes.shape({}).isRequired
    }).isRequired
  }
  state = {
    validName: false,
    validEmail: false,
    validPass: false,
    formErrors: { name: '', email: '', password: '' },
    name: '',
    email: '',
    password: ''
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { signup } = this.props;
    const { name, email, password } = this.state;
    signup({ name, email, password });
  }
  validateField = (fieldName, value) => {
    let isValid = false;
    const { formErrors } = this.state;
    switch (fieldName) {
      case 'name':
        isValid = /^[a-z ,.'-]+$/i.test(value);
        formErrors.name = isValid ? '' : 'must have no special characters';
        this.setState({ validName: isValid });
        break;
      case 'email':
        isValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        formErrors.email = isValid ? '' : 'is invalid';
        this.setState({ validEmail: isValid });
        break;
      case 'password':
        isValid = value.length > 5;
        formErrors.password = isValid ? '' : 'must be larger than 6 characters';
        this.setState({ validPass: isValid });
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  };

  render() {
    const {
      validName, validEmail, validPass,
      name, email, password, formErrors
    } = this.state;
    const isFormValid = validName && validEmail && validPass;
    const { isLoading, error, user } = this.props.auth;

    if (user.email) return <Redirect to="/" />;
    return (
      isLoading ? <LoadingSpinner /> :
      <Form onSubmit={this.handleSubmit}>
        <Field>
          <Input
            type="text"
            name="name"
            id="name"
            valid={validName}
            value={name}
            onChange={this.handleChange}
            onInput={() => this.validateField('name', name)}
            onBlur={() => this.validateField('name', name)}
          />
          <Label htmlFor="name"> Name {formErrors.name} </Label>
        </Field>
        <Field>
          <Input
            type="email"
            name="email"
            id="email"
            valid={validEmail}
            value={email}
            onChange={this.handleChange}
            onInput={() => this.validateField('email', email)}
            onBlur={() => this.validateField('email', email)}
          />
          <Label htmlFor="email"> Email {formErrors.email} </Label>
        </Field>
        <Field>
          <Input
            type="password"
            name="password"
            id="password"
            valid={validPass}
            value={password}
            onChange={this.handleChange}
            onInput={() => this.validateField('password', password)}
            onBlur={() => this.validateField('password', password)}
          />
          <Label htmlFor="password"> Password {formErrors.password} </Label>
        </Field>
        <FormActions>
          <Cancel to="/">Cancel</Cancel>
          <Submit disabled={!isFormValid} >Create</Submit>
        </FormActions>
        <SubmitError>
          {error}
        </SubmitError>
      </Form>
    );
  }
}
