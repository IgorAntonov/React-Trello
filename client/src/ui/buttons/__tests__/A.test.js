import React from 'react';
import { shallow } from 'enzyme';

import { A } from '../A';

describe('<A/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<A href="/" />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
