import React from 'react';
import { shallow } from 'enzyme';

import { HotApp } from './App';

test('<App />', () => {
  const fetchUser = jest.fn();

  const wrapper = shallow(<HotApp fetchUser={fetchUser} />);
  expect(wrapper.exists()).toBe(true);
});

