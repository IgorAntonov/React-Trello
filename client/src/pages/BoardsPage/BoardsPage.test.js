import React from 'react';
import { shallow } from 'enzyme';

import { PageSpinner } from 'Src/ui';
import { BoardsHeader } from 'Src/features/BoardsHeader';
import { BoardsMenu } from 'Src/features/BoardsMenu';
import { ThemeChanger } from 'Src/features/ThemeChanger';
import { BoardsPage } from './BoardsPage';

describe('<BoardsPage/>', () => {
  let wrapper;
  const initialProps = {
    isThemeModalOpen: false,
    isBoardsModalOpen: false,
    isLoadingBoards: false,
    isLoadingTheme: false,
    match: {
      path: '/boards'
    },
    fetchTheme: jest.fn(),
    fetchUserBoards: jest.fn(),
    reorderList: jest.fn(),
    moveFromToList: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<BoardsPage {...initialProps} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should fetch boards and theme on mount', () => {
    const { fetchTheme, fetchUserBoards } = wrapper.instance().props;
    expect(fetchTheme).toHaveBeenCalled();
    expect(fetchUserBoards).toHaveBeenCalled();
  });

  test('should render <PageSpinner/>, while fetching', () => {
    wrapper.setProps({
      isLoadingBoards: true,
      isLoadingTheme: true
    });
    expect(wrapper.contains(<PageSpinner />)).toBe(true);
    expect(wrapper.contains(<BoardsHeader />)).toBe(false);
    wrapper.setProps({
      isLoadingBoards: false,
      isLoadingTheme: true
    });
    expect(wrapper.contains(<PageSpinner />)).toBe(true);
    expect(wrapper.contains(<BoardsHeader />)).toBe(false);
    wrapper.setProps({
      isLoadingBoards: true,
      isLoadingTheme: false
    });
    expect(wrapper.contains(<PageSpinner />)).toBe(true);
    expect(wrapper.contains(<BoardsHeader />)).toBe(false);
  });

  test('should not render <PageSpinner/>, when fetching is over', () => {
    expect(wrapper.contains(<PageSpinner />)).toBe(false);
    expect(wrapper.contains(<BoardsHeader />)).toBe(true);
  });

  test('should render <ThemeChanger/> by condition', () => {
    expect(wrapper.contains(<ThemeChanger />)).toBe(false);
    wrapper.setProps({ isThemeModalOpen: true });
    expect(wrapper.contains(<ThemeChanger />)).toBe(true);
  });

  test('should render <BoardsMenu/> by condition', () => {
    expect(wrapper.contains(<BoardsMenu />)).toBe(false);
    wrapper.setProps({ isBoardsModalOpen: true });
    expect(wrapper.contains(<BoardsMenu />)).toBe(true);
  });
});
