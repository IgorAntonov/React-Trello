import React from 'react';
import { mount } from 'enzyme';

import { Button } from 'Src/ui';
import { AddList } from '../AddList';
import {
  AddButton,
  NewCardField,
  Field,
  CancelButton
} from '../AddList/style';

describe('', () => {
  let wrapper;
  const props = {
    boardId: '1',
    createList: jest.fn()
  };
  beforeEach(() => {
    wrapper = mount(<AddList {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <AddButton/> by condition', () => {
    expect(wrapper.find(AddButton)).toHaveLength(1);
    wrapper.setState({ showInput: true });
    expect(wrapper.find(AddButton)).toHaveLength(0);
  });

  test('should handle click on <AddButton/>', () => {
    expect(wrapper.state('showInput')).toBe(false);

    const spy = jest.spyOn(wrapper.instance(), 'showInput');
    wrapper.instance().forceUpdate();
    wrapper.find(AddButton).simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state('showInput')).toBe(true);
  });

  test('should render <NewCardField/> by condition', () => {
    expect(wrapper.find(NewCardField)).toHaveLength(0);
    wrapper.setState({ showInput: true });
    expect(wrapper.find(NewCardField)).toHaveLength(1);
  });

  test('should change input value correctly', () => {
    const value = 'value';
    wrapper.setState({ showInput: true });
    expect(wrapper.state('listName')).toBe('');
    expect(wrapper.find(Field).prop('value')).toBe('');

    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find(Field).simulate(
      'change',
      { target: { value } }
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state('listName')).toBe(value);
    expect(wrapper.find(Field).prop('value')).toBe(value);
  });

  test('should handle keyDown event on input (Enter, Esc)', () => {
    wrapper.setState({ showInput: true });
    const spySubmit = jest.spyOn(wrapper.instance(), 'submitList');
    const spyHide = jest.spyOn(wrapper.instance(), 'hideInput');
    wrapper.instance().forceUpdate();

    wrapper.find(Field).simulate('keyDown', { which: 27 });
    expect(spyHide).toHaveBeenCalledTimes(1);

    wrapper.setState({ showInput: true });
    wrapper.find(Field).simulate(
      'keyDown',
      { which: 13, shiftKey: true }
    );
    expect(spySubmit).not.toHaveBeenCalled();
    wrapper.find(Field).simulate('keyDown', { which: 13 });
    expect(spySubmit).toHaveBeenCalledTimes(1);
  });

  test('should submit list on click <Button/>', () => {
    wrapper.setState({ showInput: true });
    const spySubmit = jest.spyOn(wrapper.instance(), 'submitList');
    wrapper.instance().forceUpdate();

    wrapper.find(Button).simulate('click');
    expect(spySubmit).toHaveBeenCalledTimes(1);
  });

  test('should hide input on click <CancelButton/>', () => {
    wrapper.setState({ showInput: true });
    const spyHide = jest.spyOn(wrapper.instance(), 'hideInput');
    wrapper.instance().forceUpdate();

    wrapper.find(CancelButton).simulate('click');
    expect(spyHide).toHaveBeenCalledTimes(1);
  });
});
