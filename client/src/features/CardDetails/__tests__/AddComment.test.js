import React from 'react';
import { mount } from 'enzyme';

import { AddComment } from '../AddComment';
import { UserName, CommentInput } from '../AddComment/style';

describe('<AddComment/>', () => {
  let wrapper;
  const props = {
    cardId: '1',
    username: 'name',
    addComment: jest.fn()
  };
  beforeEach(() => {
    wrapper = mount(<AddComment {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render correct username', () => {
    expect(wrapper.find(UserName).prop('children'))
      .toEqual(['as ', props.username]);
  });

  test('should add comment on blur', () => {
    const value = 'value';
    wrapper.find(CommentInput).simulate('focus');
    wrapper.find(CommentInput).simulate(
      'blur',
      { type: 'blur', target: { value } },
    );

    expect(props.addComment).toHaveBeenCalledWith(value, props.cardId);
  });
});
