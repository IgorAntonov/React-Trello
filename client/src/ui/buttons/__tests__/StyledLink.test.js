import React from 'react';
import { shallow } from 'enzyme';

import { StyledLink } from '../StyledLink';

describe('<StyledLink/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StyledLink to="/" />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

