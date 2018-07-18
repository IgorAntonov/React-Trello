import React from 'react';
import { mount } from 'enzyme';
// eslint-disable-next-line
import { createMemoryHistory } from 'history';

import { AddBoard } from '../AddBoard/AddBoard';
import { AddButton, BoardInput } from '../AddBoard/style';

describe('<AddBoard/>', () => {
  let wrapper;
  const history = createMemoryHistory('/boards');
  const props = {
    createBoard: jest.fn(),
    history
  };
  beforeEach(() => {
    wrapper = mount(<AddBoard {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render different content by condition showCreateInput', () => {
    expect(wrapper.find(AddButton)).toHaveLength(1);
    expect(wrapper.find(BoardInput)).toHaveLength(0);

    wrapper.setState({ showCreateInput: true });

    expect(wrapper.find(AddButton)).toHaveLength(0);
    expect(wrapper.find(BoardInput)).toHaveLength(1);
  });

  test('should show input after click on button', () => {
    expect(wrapper.state('showCreateInput')).toBe(false);

    const spy = jest.spyOn(wrapper.instance(), 'showInput');
    wrapper.instance().forceUpdate();
    wrapper.find(AddButton).simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state('showCreateInput')).toBe(true);
  });

  test('should change input value correctly ', () => {
    const value = 'value';
    wrapper.setState({ showCreateInput: true });
    expect(wrapper.state('name')).toBe('');
    expect(wrapper.find(BoardInput).prop('value')).toBe('');

    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    wrapper.instance().forceUpdate();
    wrapper.find(BoardInput).simulate(
      'change',
      { target: { value } }
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(wrapper.state('name')).toBe(value);
    expect(wrapper.find(BoardInput).prop('value')).toBe(value);
  });

  test('should reset input value, when input is hidden, ', () => {
    wrapper.setState({ showCreateInput: true, name: 'value' });
    wrapper.instance().hideInput();
    expect(wrapper.state()).toEqual({ showCreateInput: false, name: '' });
  });

  test('should create board only on press Enter, then hide input ', () => {
    wrapper.setState({ showCreateInput: true, name: 'value' });
    wrapper.find(BoardInput).simulate('keyPress', { which: 68 });
    wrapper.find(BoardInput).simulate('keyPress', { which: 13 });
    expect(wrapper.prop('createBoard')).toHaveBeenCalledTimes(1);
    expect(wrapper.state()).toEqual({ showCreateInput: false, name: '' });
  });
});
