import React from 'react';
import { shallow } from 'enzyme';

import { LoadingSpinner, Svg } from './LoadingSpinner';

test(' <LoadingSpinner /> renders', () => {
  const wrapper = shallow(<LoadingSpinner />);
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find(Svg)).toHaveLength(1);
});
