import React from 'react';
import { shallow } from 'enzyme';

import { Icon, icons } from './Icon';

describe('<Icon/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Icon icon="github" />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.type()).toEqual('svg');
  });

  test('should render correct icon', () => {
    expect(wrapper.find('svg').prop('width')).toEqual('24px');
    expect(wrapper.find('svg').prop('height')).toEqual('24px');
    expect(wrapper.find('svg').prop('viewBox')).toEqual('0 0 48 48');
    expect(wrapper.find('path').prop('d')).toEqual(icons.github);
  });
});

