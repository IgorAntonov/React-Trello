import React from 'react';
import { shallow } from 'enzyme';

import { P } from './P';

test('<P /> renders', () => {
  const wrapper = shallow(<P />);
  expect(wrapper.exists()).toBe(true);
});
