import React from 'react';
import { Redirect } from 'react-router-dom';
import { shallow } from 'enzyme';

import { Footer, Header, StyledLink } from 'Src/ui';
import { AuthBlock } from 'Src/features/AuthBlock';
import { GreetingPage } from './GreetingPage';
import { Logo } from './style';

describe('<GreetingPage/>', () => {
  let wrapper;
  const props = {
    isAuth: false,
    loginUser: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<GreetingPage {...props} />);
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

  test('should render <AuthBlock/>', () => {
    expect(wrapper.find(AuthBlock)).toHaveLength(1);
  });

  test('should render <Link/> to signup page, when user is not authenticated', () => {
    const link = wrapper.find(StyledLink);
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/signup');
  });

  test('should redirect, if user is authenticated', () => {
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(Redirect)).toHaveLength(1);
    expect(wrapper.find(Redirect).props().to).toBe('/boards');
  });

  test('should render <Logo/> with link', () => {
    const logo = wrapper.find(Logo);
    expect(logo).toHaveLength(1);
    expect(logo.prop('to')).toEqual('/');
  });
});
