import React from 'react';
import { shallow } from 'enzyme';

import { Footer, Header, StyledLink } from 'Src/ui';
import { SignupForm } from 'Src/features/SignupForm';
import { SignupPage } from './SignupPage';

describe('<SignupPage/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignupPage />);
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

  test('should render <Link/> to login page', () => {
    const link = wrapper.find(StyledLink);
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/login');
  });

  test('should render <SignupForm/>', () => {
    expect(wrapper.find(SignupForm)).toHaveLength(1);
  });
});
