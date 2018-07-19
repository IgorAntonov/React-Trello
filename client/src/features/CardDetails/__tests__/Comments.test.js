import React from 'react';
import { shallow } from 'enzyme';

import { Comments } from '../Comments';
import { Comment } from '../Comment';

describe('<Comments/>', () => {
  let wrapper;
  const props = {
    comments: []
  };
  beforeEach(() => {
    wrapper = shallow(<Comments {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render all comments', () => {
    wrapper.setProps({
      comments: [
        { body: '1', author: '1', createAt: 1 },
        { body: '2', author: '2', createAt: 2 },
        { body: '3', author: '3', createAt: 3 }
      ]
    });
    expect(wrapper.find(Comment)).toHaveLength(3);
  });
});
