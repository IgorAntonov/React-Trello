import React, { Component } from 'react';

import { Form, Input, Field, Label, FormActions, Submit, Cancel } from '../../shared';

export class LoginForm extends Component {
  state = {
    validEmail: false,
    validPass: false,
    formErrors: { email: '', password: '' },
    email: '',
    password: ''
  }

  validateField = (fieldName, value) => {
    let isValid = false;
    const { formErrors } = this.state;
    switch (fieldName) {
      case 'email':
        isValid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
        formErrors.email = isValid ? '' : 'is invalid';
        this.setState({ validEmail: isValid });
        break;
      case 'password':
        isValid = value.length > 6;
        formErrors.password = isValid ? '' : 'must be larger than 6 characters';
        this.setState({ validPass: isValid });
        break;
      default:
        break;
    }
    this.setState({ formErrors });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const {
      validEmail, validPass,
      email, password, formErrors
    } = this.state;
    const isFormValid = validEmail && validPass;

    return (
      <Form>
        <Field>
          <Input
            type="email"
            name="email"
            id="email"
            valid={validEmail}
            value={email}
            onChange={this.handleChange}
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
            onBlur={() => this.validateField('password', password)}
          />
          <Label htmlFor="password"> Password {formErrors.password} </Label>
        </Field>
        <FormActions>
          <Cancel to="/">Cancel</Cancel>
          <Submit disabled={!isFormValid}>LOGIN</Submit>
        </FormActions>
      </Form>
    );
  }
}
