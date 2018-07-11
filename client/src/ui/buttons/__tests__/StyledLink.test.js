import React from 'react';
import { shallow } from 'enzyme';

import { StyledLink } from '../StyledLink';

test('renders', () => {
  const wrapper = shallow(<StyledLink to="/" />);

  expect(wrapper.exists()).toBe(true);
});

