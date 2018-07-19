import React from 'react';
import { shallow } from 'enzyme';

import { CardName } from '../CardName';
import { NameInput } from '../CardName/style';

describe('<CardName/>', () => {
  let wrapper;
  const props = {
    cardName: 'card',
    listTitle: 'list',
    cardId: 'id',
    renameCard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<CardName {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <NameInput/>', () => {
    const input = wrapper.find(NameInput);
    expect(input).toHaveLength(1);
    expect(input.prop('defaultValue')).toBe(props.cardName);
  });

  test('should rename card on blur', () => {
    const value = 'value';
    const input = wrapper.find(NameInput);
    input.simulate('blur', { type: 'blur', target: { value } });

    expect(props.renameCard).toHaveBeenCalledWith(value, props.cardId);
  });
});
