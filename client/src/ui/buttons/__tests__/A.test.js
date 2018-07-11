import React from 'react';
import { shallow } from 'enzyme';

import { A } from '../A';

test('<A /> renders', () => {
  const href = '/';
  const wrapper = shallow(<A href={href} />);

  expect(wrapper.exists()).toBe(true);
});
