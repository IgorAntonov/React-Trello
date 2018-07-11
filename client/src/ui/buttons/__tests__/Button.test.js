import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../Button';


test('<Button /> renders', () => {
  const wrapper = shallow(<Button />);

  expect(wrapper.exists()).toBe(true);
});

