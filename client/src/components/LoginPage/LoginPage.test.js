import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from './LoginPage';
import { LoginFormContainer as LoginForm } from './LoginForm';
import { Header, Link } from './style';
import { Footer } from '../shared';

describe('<LoginPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
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

  test('should render <Link /> to signup page', () => {
    const link = wrapper.find(Link);

    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/signup');
  });

  test('should render <LoginForm />', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
});
