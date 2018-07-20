import React from 'react';
import { shallow } from 'enzyme';

import { ThemeChanger } from './ThemeChanger';
import { CloseBtn, ThemeButton } from './style';

describe('<ThemeChanger/>', () => {
  let wrapper;
  const props = {
    setTheme: jest.fn(),
    closeModal: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<ThemeChanger {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should close on click <CloseBtn/>', () => {
    wrapper.find(CloseBtn).simulate('click');
    expect(props.closeModal).toHaveBeenCalledWith('themeChanger');
  });

  test('should handle click on <ThemeButton/>', () => {
    wrapper.find(ThemeButton).first().simulate('click');
    expect(props.closeModal).toHaveBeenCalledWith('themeChanger');
    expect(props.setTheme).toHaveBeenCalledTimes(1);
  });
});
