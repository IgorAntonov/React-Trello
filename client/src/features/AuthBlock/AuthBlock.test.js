import React from 'react';
import { shallow } from 'enzyme';

import { Button, StyledLink as Link } from 'Src/ui';
import { AuthBlock } from './AuthBlock';

describe('<AuthBlock/>', () => {
  let wrapper;
  const props = {
    isAuth: false,
    logoutUser: jest.fn()
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
  });

  test('should render content for authenticated users', () => {
    wrapper.setProps({ isAuth: true });
    const link = wrapper.find(Link);
    const button = wrapper.find(Button);

    expect(link).toHaveLength(1);
    expect(link.prop('to')).toBe('/boards');
    expect(button).toHaveLength(1);
    expect(button.prop('onClick')).toEqual(props.logoutUser);
  });

  test('should logout user on click', () => {
    wrapper.setProps({ isAuth: true });
    wrapper.find(Button).simulate('click');
    expect(props.logoutUser).toHaveBeenCalledTimes(1);
  });
});
