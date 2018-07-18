import React from 'react';
import { shallow } from 'enzyme';

import { AllBoards } from '../AllBoards';
import { AddBoard } from '../AddBoard';
import { BoardLink } from '../BoardLink';

describe('<AllBoards/>', () => {
  let wrapper;
  const props = {
    boards: [],
    deleteBoard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<AllBoards {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <AddBoard/>', () => {
    expect(wrapper.find(AddBoard)).toHaveLength(1);
  });

  test('should render all BoardLinks', () => {
    expect(wrapper.find(BoardLink)).toHaveLength(0);
    wrapper.setProps({
      boards: [
        { _id: '1', name: '1' },
        { _id: '2', name: '2' }
      ]
    });
    expect(wrapper.find(BoardLink)).toHaveLength(2);
  });
});
