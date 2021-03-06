import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../Button';

describe('<Button/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

