import React from 'react';
import { shallow } from 'enzyme';

import { Footer, Header, StyledLink } from 'Src/ui';
import { AuthBlock } from 'Src/features/AuthBlock';
import { GreetingPage } from './GreetingPage';
import { Logo } from './style';

describe('<GreetingPage/>', () => {
  let wrapper;
  const props = {
    isAuth: false,
    logoutUser: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<GreetingPage {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Header/>', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });

  test('should render <Footer/>', () => {
    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  test('should render <AuthBlock/>', () => {
    expect(wrapper.contains(<AuthBlock />)).toBe(true);
  });

  test('should render <Link/> to signup page, when user is not authenticated', () => {
    const link = wrapper.find(StyledLink);
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/signup');
  });

  test('should render <Link/> to boards page, when user is authenticated', () => {
    wrapper.setProps({ isAuth: true });
    const link = wrapper.find(StyledLink);
    expect(link).toHaveLength(1);
    expect(link.prop('to')).toEqual('/boards');
  });

  test('should render <Logo/> with link', () => {
    const logo = wrapper.find(Logo);
    expect(logo).toHaveLength(1);
    expect(logo.prop('to')).toEqual('/');
  });
});
