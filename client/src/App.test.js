import React from 'react';
import { shallow } from 'enzyme';

import { PageSpinner } from 'Src/ui';
import { App } from './App';

describe('<App/>', () => {
  let wrapper;
  const initialProps = {
    fetchUser: jest.fn(),
    isAuth: false,
    isLoading: false,
    theme: {}
  };
  beforeEach(() => {
    wrapper = shallow(<App {...initialProps} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should fetch User on mount', () => {
    const { fetchUser } = wrapper.instance().props;
    expect(fetchUser).toHaveBeenCalled();
  });

  test('should render <PageSpinner/> by loading condition', () => {
    expect(wrapper.contains(<PageSpinner />)).toBe(false);
    wrapper.setProps({ isLoading: true });
    expect(wrapper.contains(<PageSpinner />)).toBe(true);
  });
});

