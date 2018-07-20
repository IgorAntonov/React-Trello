import React from 'react';
import { shallow } from 'enzyme';

import { AddCard } from '../AddCard/AddCard';
import { NewCardField, PosedField } from '../AddCard/style';

describe('<AddCard/>', () => {
  let wrapper;
  const props = {
    listId: 'listId',
    createCard: jest.fn(),
    showStubCard: jest.fn(),
    hideStubCard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<AddCard {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <NewCardField/> by condition', () => {
    expect(wrapper.find(NewCardField)).toHaveLength(0);
    wrapper.setState({ showInput: true });
    expect(wrapper.find(NewCardField)).toHaveLength(1);
  });

  test('should change input value correctly', () => {
    const value = 'value';
    wrapper.setState({ showInput: true });
    expect(wrapper.state('cardName')).toBe('');
    expect(wrapper.find(PosedField).prop('value')).toBe('');

    wrapper.find(PosedField).simulate('change', { target: { value } });
    expect(wrapper.state('cardName')).toBe(value);
    expect(wrapper.find(PosedField).prop('value')).toBe(value);
  });

  test('should handle keyDown events on input (Enter, Esc)', () => {
    wrapper.setState({ showInput: true });

    const spyHide = jest.spyOn(wrapper.instance(), 'hideInput');
    const spySubmit = jest.spyOn(wrapper.instance(), 'submitCard');
    wrapper.instance().forceUpdate();

    wrapper.find(PosedField).simulate(
      'keyDown',
      { which: 13, shiftKey: false }
    );
    expect(spySubmit).toHaveBeenCalledTimes(1);
    expect(spyHide).toHaveBeenCalledTimes(1);

    wrapper.setState({ showInput: true });
    wrapper.find(PosedField).simulate(
      'keyDown',
      { which: 27 }
    );
    expect(spyHide).toHaveBeenCalledTimes(2);
  });

  test('should create card, show stubcard, hide input on submit', () => {
    const { cardName } = wrapper.state();
    const {
      listId, createCard, showStubCard, hideStubCard
    } = wrapper.instance().props;
    const spyHide = jest.spyOn(wrapper.instance(), 'hideInput');
    wrapper.instance().forceUpdate();

    wrapper.setState({ showInput: true });
    wrapper.instance().submitCard();

    expect(showStubCard).toHaveBeenCalledWith(cardName);
    expect(createCard).toHaveBeenCalledWith(cardName, listId, hideStubCard);
    expect(spyHide).toHaveBeenCalledTimes(1);
  });
});
