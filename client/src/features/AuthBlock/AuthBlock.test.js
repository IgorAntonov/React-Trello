import React from 'react';
import { shallow } from 'enzyme';

import { AuthBlock } from './AuthBlock';

describe('<AuthBlock/>', () => {
  let wrapper;
  const props = {
    isAuth: false,
    loginUser: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<AuthBlock {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render content for not authenticated users', () => {
    expect(wrapper.findWhere(node => node.props().to === '/login')).toHaveLength(1);
    expect(wrapper.findWhere(node => node.props().to === '/signup')).toHaveLength(1);
    expect(wrapper.findWhere(node => node.props().href === '/api/auth/google')).toHaveLength(1);
    expect(wrapper.findWhere(node => node.props().children === 'Demo')).toHaveLength(1);
  });
});
