import React from 'react';
import { shallow } from 'enzyme';

import { List } from '../List';
import { ListHeader } from '../ListHeader';
import { StubCard } from '../StubCard';
import { AddCard } from '../AddCard';

describe('<List/>', () => {
  let wrapper;
  const props = {
    boardId: 'boardId',
    list: {
      _id: 'listId',
      title: 'title',
      cards: []
    },
    renameList: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<List {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <ListHeader/>', () => {
    expect(wrapper.find(ListHeader)).toHaveLength(1);
  });

  test('should show <StubCard/> by condition', () => {
    expect(wrapper.find(StubCard)).toHaveLength(0);
    wrapper.setState({ isStubCardShow: true, stubCardName: '' });
    expect(wrapper.find(StubCard)).toHaveLength(1);
  });

  test('should render <AddCard/>', () => {
    expect(wrapper.find(AddCard)).toHaveLength(1);
  });
});
