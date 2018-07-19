import React from 'react';
import { shallow } from 'enzyme';

import { CardDescription } from '../CardDescription';
import { DescInput } from '../CardDescription/style';

describe('<CardDescription/>', () => {
  let wrapper;
  const props = {
    cardId: '1',
    description: 'desc',
    addCardDesc: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<CardDescription {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render correct initial value of <DescInput/>', () => {
    const input = wrapper.find(DescInput);
    expect(input).toHaveLength(1);
    expect(input.prop('defaultValue')).toBe(props.description);

    wrapper.setProps({ description: 'no description' });
    expect(wrapper.find(DescInput).prop('defaultValue')).toBe('');
  });

  test('should add description on blur', () => {
    const value = 'value';
    const input = wrapper.find(DescInput);
    input.simulate('blur', { type: 'blur', target: { value } });

    expect(props.addCardDesc).toHaveBeenCalledWith(value, props.cardId);
  });
});
