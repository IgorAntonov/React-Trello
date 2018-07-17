import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';

describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
