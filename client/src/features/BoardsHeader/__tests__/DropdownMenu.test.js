import React from 'react';
import { shallow } from 'enzyme';

import { Button } from 'Src/ui';
import { DropdownMenu } from '../DropdownMenu';
import { PosedMenu } from '../DropdownMenu/DropdownMenu';

describe('<DropdownMenu/>', () => {
  let wrapper;
  const props = {
    username: 'name',
    children: <div />
  };
  beforeEach(() => {
    wrapper = shallow(<DropdownMenu {...props} />);
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should render <Button/> that toggle menu', () => {
    const button = wrapper.find(Button);

    expect(button).toHaveLength(1);
    expect(button.prop('children')).toBe(props.username);

    button.simulate('click');
    expect(wrapper.state('showMenu')).toBe(true);

    button.simulate('click');
    expect(wrapper.state('showMenu')).toBe(false);
  });

  test('should render <PosedMenu/> by condition', () => {
    expect(wrapper.find(PosedMenu)).toHaveLength(0);
    wrapper.setState({ showMenu: true });
    expect(wrapper.find(PosedMenu)).toHaveLength(1);
  });
});
