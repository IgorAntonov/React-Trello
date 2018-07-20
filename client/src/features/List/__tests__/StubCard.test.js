import React from 'react';
import { shallow } from 'enzyme';

import { StubCard } from '../StubCard';
import { CardButton } from '../StubCard/style';

describe('<StubCard/>', () => {
  let wrapper;
  const props = {
    name: 'name'
  };
  beforeEach(() => {
    wrapper = shallow(<StubCard {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render correct title', () => {
    expect(wrapper.find(CardButton).prop('children')).toBe(props.name);
  });
});
