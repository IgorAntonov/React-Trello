import React from 'react';
import { shallow } from 'enzyme';

import { H2 } from './H2';

test('<H2 /> renders', () => {
  const wrapper = shallow(<H2 />);
  expect(wrapper.exists()).toBe(true);
});
