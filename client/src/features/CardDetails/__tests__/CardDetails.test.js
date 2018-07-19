import React from 'react';
import { shallow } from 'enzyme';

import { CardDetails } from '../CardDetails';
import { CardName } from '../CardName';
import { CardDescription } from '../CardDescription';
import { AddComment } from '../AddComment';
import { Comments } from '../Comments';
import { CardActions } from '../CardActions';

describe('<CardDetails/>', () => {
  let wrapper;
  const props = {
    card: {
      _id: '1',
      name: 'name',
      description: 'desc',
      comments: []
    },
    closeCardDetails: jest.fn(),
    listTitle: 'listTitle',
    renameCard: jest.fn(),
    addCardDesc: jest.fn(),
    user: {
      userId: '1',
      username: 'name'
    },
    addComment: jest.fn(),
    listId: 'listId',
    deleteCard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<CardDetails {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <CardName/>', () => {
    expect(wrapper.find(CardName)).toHaveLength(1);
  });

  test('should render <CardDescription/>', () => {
    expect(wrapper.find(CardDescription)).toHaveLength(1);
  });

  test('should render <AddComment/>', () => {
    expect(wrapper.find(AddComment)).toHaveLength(1);
  });

  test('should render <Comments/>', () => {
    expect(wrapper.find(Comments)).toHaveLength(1);
  });

  test('should render <CardActions/>', () => {
    expect(wrapper.find(CardActions)).toHaveLength(1);
  });
});
