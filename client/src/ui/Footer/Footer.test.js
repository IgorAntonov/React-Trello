import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from './Footer';
import { A } from './style';


describe('<Footer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render all <A />', () => {
    expect(wrapper.find(A)).toHaveLength(3);
  });
});
