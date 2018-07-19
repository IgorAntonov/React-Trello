import React from 'react';
import { shallow } from 'enzyme';

import { Comment } from '../Comment';
import { AuthorName, Time, CommentBody } from '../Comment/style';

describe('<Comment/>', () => {
  let wrapper;
  const props = {
    comment: {
      author: 'author1',
      body: 'body1',
      createAt: 123456
    }
  };
  beforeEach(() => {
    wrapper = shallow(<Comment {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render correct author name', () => {
    const name = wrapper.find(AuthorName);
    expect(name).toHaveLength(1);
    expect(name.prop('children')).toBe(props.comment.author);
  });

  test('should render <Time/> with correct date', () => {
    const time = wrapper.find(Time);
    expect(time).toHaveLength(1);
    expect(time.prop('date')).toBe(props.comment.createAt);
  });

  test('should render correct comment body', () => {
    const body = wrapper.find(CommentBody);
    expect(body).toHaveLength(1);
    expect(body.prop('children')).toBe(props.comment.body);
  });
});
