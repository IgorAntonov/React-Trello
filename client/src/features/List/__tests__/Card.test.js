import React from 'react';
import { shallow } from 'enzyme';

import { Card } from '../Card/Card';
import {
  CardButton,
  DescWrapper,
  CommentWrapper,
  CommentCount
} from '../Card/style';

describe('<Card/>', () => {
  let wrapper;
  const props = {
    card: {
      _id: 'id',
      name: 'name',
      description: '',
      comments: []
    },
    openCardDetails: jest.fn(),
    listId: 'listId',
    isDragging: false
  };
  beforeEach(() => {
    wrapper = shallow(<Card {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should open card details on click <CardButton/>', () => {
    const { openCardDetails, card, listId } = props;
    wrapper.find(CardButton).simulate('click');
    expect(openCardDetails).toHaveBeenCalledWith(card._id, listId);
  });

  test('should render description icon, only if description exists', () => {
    expect(wrapper.find(DescWrapper)).toHaveLength(0);
    wrapper.setProps({
      card: {
        description: 'descr',
        comments: []
      }
    });
    expect(wrapper.find(DescWrapper)).toHaveLength(1);
  });

  test('should render comments icon, only if comments exist', () => {
    expect(wrapper.find(CommentWrapper)).toHaveLength(0);
    wrapper.setProps({
      card: {
        description: '',
        comments: [{}, {}]
      }
    });
    expect(wrapper.find(CommentWrapper)).toHaveLength(1);
    expect(wrapper.find(CommentCount).prop('children')).toBe(2);
  });
});
