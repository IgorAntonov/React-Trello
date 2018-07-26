import React from 'react';
import { shallow } from 'enzyme';

import { Footer, Header, StyledLink } from 'Src/ui';
import { LoginForm } from 'Src/features/LoginForm';
import { LoginPage } from './LoginPage';

describe('<LoginPage/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoginPage />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Header/>', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test('should render <Footer/>', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  test('should render <Link/> to signup page', () => {
    const link = wrapper.find(StyledLink);
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/signup');
  });

  test('should render <LoginForm/>', () => {
    expect(wrapper.contains(<LoginForm />)).toBe(true);
  });
});
