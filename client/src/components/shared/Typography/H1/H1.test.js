import React from 'react';
import { shallow } from 'enzyme';

import { H1 } from './H1';

test('<H1 /> renders', () => {
  const wrapper = shallow(<H1 />);
  expect(wrapper.exists()).toBe(true);
});

