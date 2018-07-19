import React from 'react';
import { shallow } from 'enzyme';

import { BoardsMenu } from './BoardsMenu';
import { BoardLink } from './style';

describe('<BoardsMenu/>', () => {
  let wrapper;
  const props = {
    closeModal: jest.fn(),
    boards: []
  };
  beforeEach(() => {
    wrapper = shallow(<BoardsMenu {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render all <BoardLink/>', () => {
    expect(wrapper.find(BoardLink)).toHaveLength(0);

    wrapper.setProps({
      boards: [
        { _id: '1', name: 'name1' },
        { _id: '2', name: 'name2' }
      ]
    });
    expect(wrapper.find(BoardLink)).toHaveLength(2);
  });

  test('should close menu on click <BoardLink/>', () => {
    wrapper.setProps({
      boards: [{ _id: '1', name: 'name1' }]
    });
    wrapper.find(BoardLink).simulate('click');

    expect(props.closeModal).toHaveBeenCalledTimes(1);
  });
});
