import React from 'react';
import { shallow } from 'enzyme';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import { SignupForm } from './SignupForm';

describe('<SignupForm/>', () => {
  let wrapper;
  const props = {
    error: 'error',
    isAuth: false,
    signupUser: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<SignupForm {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Formik/>, if user is not auth-d', () => {
    expect(wrapper.find(Formik)).toHaveLength(1);
  });

  test('should render <Redirect/>, if user is auth-d', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
