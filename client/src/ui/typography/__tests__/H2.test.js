import React from 'react';
import { shallow } from 'enzyme';

import { H2 } from '../H2';

describe('<H2/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<H2 />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
