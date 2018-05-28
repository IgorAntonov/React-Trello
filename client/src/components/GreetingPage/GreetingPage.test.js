import React from 'react';
import { shallow } from 'enzyme';

import { GreetingPage } from './GreetingPage';
import { Header, Logo } from './style';
import { Footer, StyledLink as Link } from '../shared';

describe('<GreetingPage />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<GreetingPage />);
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

  test('should render <Logo /> with link', () => {
    const logo = wrapper.find(Logo);

    expect(logo).toHaveLength(1);
    expect(logo.prop('to')).toEqual('/');
  });
});
