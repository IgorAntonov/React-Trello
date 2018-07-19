import React from 'react';
import { shallow } from 'enzyme';

import { CardActions } from '../CardActions';
import { DeleteBtn } from '../CardActions/style';

describe('<CardActions/>', () => {
  let wrapper;
  const props = {
    cardId: '1',
    listId: '2',
    closeCardDetails: jest.fn(),
    deleteCard: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<CardActions {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should close <CardDetails/> on click', () => {
    const button = wrapper.findWhere(node =>
      node.prop('onClick') === props.closeCardDetails);
    expect(button).toHaveLength(1);

    button.simulate('click');
    expect(props.closeCardDetails).toHaveBeenCalledTimes(1);
  });

  test('should show <DeleteBtn/> on click', () => {
    const icon = wrapper.findWhere(node =>
      node.prop('onClick') === wrapper.instance().showConfirm);
    expect(icon).toHaveLength(1);

    icon.simulate('click');
    expect(wrapper.find(DeleteBtn)).toHaveLength(1);
  });

  test('should delete card on click <DeleteBtn/>', () => {
    wrapper.setState({ showDeleteConfirm: true });
    wrapper.find(DeleteBtn).simulate('click');
    expect(props.deleteCard).toHaveBeenCalledWith(props.cardId, props.listId);
    expect(props.closeCardDetails).toHaveBeenCalledTimes(2);
  });
});
