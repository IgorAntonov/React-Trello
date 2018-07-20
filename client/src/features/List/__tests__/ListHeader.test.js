import React from 'react';
import { shallow } from 'enzyme';

import { ListHeader } from '../ListHeader/ListHeader';
import {
  Title,
  DeleteButton,
  DeleteConfirm,
  ConfirmBtn
} from '../ListHeader/style';

describe('<ListHeader/>', () => {
  let wrapper;
  const props = {
    title: 'title',
    renameList: jest.fn(),
    isConfirmShow: false,
    showConfirm: jest.fn(),
    hideConfirm: jest.fn(),
    listId: 'listId',
    boardId: 'boardId',
    deleteList: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<ListHeader {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Title/> with correct initial value', () => {
    const title = wrapper.find(Title);
    expect(title).toHaveLength(1);
    expect(title.prop('defaultValue')).toBe(props.title);
  });

  test('should rename list on events', () => {
    const title = wrapper.find(Title);
    title.simulate('blur');
    title.simulate('keyPress');
    expect(props.renameList).toHaveBeenCalledTimes(2);
  });

  test('should show confirm on click <DeleteButton/>', () => {
    wrapper.find(DeleteButton).simulate('click');
    expect(props.showConfirm).toHaveBeenCalledTimes(1);
  });

  test('should show <DeleteConfirm/> by condition', () => {
    expect(wrapper.find(DeleteConfirm)).toHaveLength(0);
    wrapper.setProps({ isConfirmShow: true });
    expect(wrapper.find(DeleteConfirm)).toHaveLength(1);
  });

  test('should delete list on click <ConfirmBtn/>', () => {
    const { deleteList, boardId, listId } = props;
    wrapper.setProps({ isConfirmShow: true });
    wrapper.find(ConfirmBtn).simulate('click');
    expect(deleteList).toHaveBeenCalledWith(boardId, listId);
  });
});
