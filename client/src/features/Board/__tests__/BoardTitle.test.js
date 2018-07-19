import React from 'react';
import { shallow } from 'enzyme';

import { BoardTitle } from '../BoardTitle';
import { RenameInput } from '../BoardTitle/style';

describe('<BoardTitle/>', () => {
  let wrapper;
  const props = {
    title: 'title',
    boardId: 'id',
    renameBoard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<BoardTitle {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render initial input value equal prop[title] ', () => {
    expect(wrapper.find(RenameInput).prop('defaultValue')).toBe(props.title);
  });

  test('should blur input on keyPress Enter', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleRenameBoard');
    wrapper.instance().forceUpdate();

    wrapper.find(RenameInput).simulate('focus');
    wrapper.find(RenameInput).simulate('keyPress', { which: 13 });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('should rename board on blur', () => {
    const value = 'value';
    wrapper.find(RenameInput).simulate('focus');
    wrapper.find(RenameInput).simulate(
      'blur',
      { type: 'blur', target: { value } },
    );

    expect(wrapper.instance().props.renameBoard)
      .toHaveBeenCalledWith(value, props.boardId);
  });
});
