import React from 'react';
import { shallow } from 'enzyme';

import { BoardLink } from '../BoardLink/BoardLink';
import {
  Wrapper,
  StyledLink,
  DeleteBtn,
  DeleteConfirm
} from '../BoardLink/style';


describe('', () => {
  let wrapper;
  const props = {
    boardId: 'boardId',
    deleteBoard: jest.fn(),
    name: 'name'
  };
  beforeEach(() => {
    wrapper = shallow(<BoardLink {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render Link to the board', () => {
    const link = wrapper.find(StyledLink);
    expect(link.prop('to')).toBe(`/boards/${props.boardId}`);
    expect(link.prop('children')).toBe(`${props.name}`);
  });

  test('should handle correctly showDeleteBtn state', () => {
    expect(wrapper.state('showDeleteBtn')).toBe(false);
    wrapper.find(Wrapper).simulate('mouseEnter');
    expect(wrapper.state('showDeleteBtn')).toBe(true);
    wrapper.find(Wrapper).simulate('mouseLeave');
    expect(wrapper.state('showDeleteBtn')).toBe(false);
    wrapper.find(Wrapper).simulate('focus');
    expect(wrapper.state('showDeleteBtn')).toBe(true);
    wrapper.find(Wrapper).simulate('blur');
    expect(wrapper.state('showDeleteBtn')).toBe(false);
  });

  test('should show <DeleteBtn/> by condition', () => {
    expect(wrapper.find(DeleteBtn)).toHaveLength(0);
    wrapper.setState({ showDeleteBtn: true });
    expect(wrapper.find(DeleteBtn)).toHaveLength(1);
  });

  test('should handle correctly showDeleteConfirm state', () => {
    wrapper.setState({ showDeleteBtn: true });
    wrapper.find(DeleteBtn).simulate('click');

    expect(wrapper.state('showDeleteConfirm')).toBe(true);
    wrapper.instance().hideConfirm();
    expect(wrapper.state('showDeleteConfirm')).toBe(false);
  });

  test('should show <DeleteConfirm/> by condition', () => {
    expect(wrapper.find(DeleteConfirm)).toHaveLength(0);
    wrapper.setState({ showDeleteConfirm: true });
    expect(wrapper.find(DeleteConfirm)).toHaveLength(1);
  });

  test('should handle correctly isConfirm state', () => {
    wrapper.setState({ showDeleteConfirm: true });
    expect(wrapper.state('isConfirm')).toBe(true);
    wrapper.find(DeleteConfirm).simulate('mouseLeave');
    expect(wrapper.state('isConfirm')).toBe(false);
    wrapper.find(DeleteConfirm).simulate('mouseEnter');
    expect(wrapper.state('isConfirm')).toBe(true);
  });

  test('should delete Board on click', () => {
    wrapper.setState({ showDeleteConfirm: true });
    wrapper.find(DeleteConfirm).simulate('click');

    expect(wrapper.instance().props.deleteBoard).toHaveBeenCalledWith(props.boardId);
  });
});
