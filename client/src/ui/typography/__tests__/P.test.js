import React from 'react';
import { shallow } from 'enzyme';

import { P } from '../P';

describe('<P/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<P />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
