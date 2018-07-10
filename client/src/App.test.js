import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

test('<App />', () => {
  const fetchUser = jest.fn();

  const wrapper = shallow(<App fetchUser={fetchUser} />);
  expect(wrapper.exists()).toBe(true);
});

