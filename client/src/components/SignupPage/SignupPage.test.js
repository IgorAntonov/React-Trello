import React from 'react';
import { shallow } from 'enzyme';

import { SignupPage } from './SignupPage';
import { SignupFormContainer as SignupForm } from './SignupForm';
import { Header, Link } from './style';
import { Footer } from '../shared';

describe('<SignupPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignupPage />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Header />', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test('should render <Footer />', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test('should render <Link /> to login page', () => {
    const link = wrapper.find(Link);

    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/login');
  });

  test('should render <SignupForm />', () => {
    expect(wrapper.find(SignupForm)).toHaveLength(1);
  });
});
