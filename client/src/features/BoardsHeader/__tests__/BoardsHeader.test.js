import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'Src/ui';
import { BoardsHeader } from '../BoardsHeader';
import { DropdownMenu } from '../DropdownMenu';
import { CreateBoard } from '../CreateBoard';
import { Title } from '../style';

describe('<BoardsHeader/>', () => {
  let wrapper;
  const props = {
    logoutUser: jest.fn(),
    openModal: jest.fn(),
    user: {
      userId: '1',
      username: 'name'
    }
  };
  beforeEach(() => {
    wrapper = shallow(<BoardsHeader {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Button/> that open <BoardsMenu/>', () => {
    const button = wrapper.find(Button);
    expect(button).toHaveLength(1);
    expect(button.prop('children')).toBe('Boards');

    button.simulate('click');
    expect(props.openModal).toHaveBeenCalledWith('boardsMenu');
  });

  test('should render <Title/>', () => {
    const title = wrapper.find(Title);
    expect(title).toHaveLength(1);
    expect(title.prop('to')).toBe('/');
  });

  test('should render <CreateBoard/>', () => {
    expect(wrapper.find(CreateBoard)).toHaveLength(1);
  });

  test('should render <DropdownMenu />', () => {
    const menu = wrapper.find(DropdownMenu);
    expect(menu).toHaveLength(1);
    expect(menu.prop('username')).toEqual(props.user.username);
  });

  test('should render <MenuButton/> that open <ThemeChanger/>', () => {
    const button = wrapper.findWhere(node =>
      node.prop('children') === 'Change Background');

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(props.openModal).toHaveBeenCalledWith('themeChanger');
  });

  test('should render logout <MenuButton/>', () => {
    const button = wrapper.findWhere(node =>
      node.prop('children') === 'Logout');

    expect(button).toHaveLength(1);
    button.simulate('click');
    expect(props.logoutUser).toHaveBeenCalledTimes(1);
  });
});
