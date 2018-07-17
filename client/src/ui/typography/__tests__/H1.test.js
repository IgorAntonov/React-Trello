import React from 'react';
import { shallow } from 'enzyme';

import { H1 } from '../H1';

describe('<H1/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<H1 />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

