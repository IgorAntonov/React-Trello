import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('<Header/>', () => {
  let wrapper;
  const props = {
    bgColor: '#000',
    justify: 'center'
  };
  beforeEach(() => {
    wrapper = shallow(<Header {...props}> Header </Header>);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
