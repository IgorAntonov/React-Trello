import React from 'react';
import { shallow } from 'enzyme';

import { NotFoundPage } from './NotFoundPage';

describe('<NotFoundPage/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NotFoundPage />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });
  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
