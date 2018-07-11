import React from 'react';
import { shallow } from 'enzyme';

import { Icon, icons } from './Icon';

describe('<Icon />', () => {
  let wrapper;
  const props = {
    width: '25',
    height: '30',
    icon: 'github'
  };
  beforeEach(() => {
    wrapper = shallow(<Icon {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.type()).toEqual('svg');
  });


  test('should render correct icon', () => {
    expect(wrapper.find('svg').prop('width')).toEqual('25');
    expect(wrapper.find('svg').prop('height')).toEqual('30');
    expect(wrapper.find('path').prop('d')).toEqual(icons.github);
  });
});

