import React from 'react';
import { shallow } from 'enzyme';

import { List } from 'Src/features/List';
import { CardDetails } from 'Src/features/CardDetails';
import { Board } from '../Board';
import { SpinnerWrapper } from '../style';
import { BoardTitle } from '../BoardTitle';
import { AddList } from '../AddList';

describe('<Board/>', () => {
  let wrapper;
  const props = {
    lists: [],
    renameList: jest.fn(),
    createList: jest.fn(),
    renameBoard: jest.fn(),
    boardName: 'boardName',
    isCardDetailsOpen: false,
    isListSpinnerShow: false,
    match: {
      params: { id: '1' }
    }
  };
  beforeEach(() => {
    wrapper = shallow(<Board {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <BoardTitle/>', () => {
    expect(wrapper.find(BoardTitle)).toHaveLength(1);
  });

  test('should render all Lists', () => {
    expect(wrapper.find(List)).toHaveLength(0);
    wrapper.setProps({
      lists: [
        { _id: '1' },
        { _id: '2' },
        { _id: '3' },
      ]
    });
    expect(wrapper.find(List)).toHaveLength(3);
  });

  test('should render <ListSpinner/> by condition', () => {
    expect(wrapper.find(SpinnerWrapper)).toHaveLength(0);
    wrapper.setProps({ isListSpinnerShow: true });
    expect(wrapper.find(SpinnerWrapper)).toHaveLength(1);
  });

  test('should render <AddList/>', () => {
    expect(wrapper.find(AddList)).toHaveLength(1);
  });

  test('should render <CardDetails/> by condition', () => {
    expect(wrapper.find(CardDetails)).toHaveLength(0);
    wrapper.setProps({ isCardDetailsOpen: true });
    expect(wrapper.find(CardDetails)).toHaveLength(1);
  });
});
