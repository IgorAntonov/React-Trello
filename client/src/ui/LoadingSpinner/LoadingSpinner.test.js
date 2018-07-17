import React from 'react';
import { shallow } from 'enzyme';

import { LoadingSpinner } from './LoadingSpinner';

describe(' <LoadingSpinner/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LoadingSpinner />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
