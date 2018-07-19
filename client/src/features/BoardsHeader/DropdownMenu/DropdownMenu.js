import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import { Col, Button } from 'Src/ui';

const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 120%;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  background-color: ${p => p.theme.darker};
`;
export const PosedMenu = posed(MenuWrapper)({
  init: { translateY: '100%', opacity: 0 },
  open: { translateY: 0, opacity: 1 }
});

export class DropdownMenu extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }
  state = {
    showMenu: false
  };

  hideMenu = () => this.setState({ showMenu: false });
  toggleMenu = () => this.setState(prevState => ({
    showMenu: !prevState.showMenu
  }));

  render() {
    const { children, username } = this.props;
    const { showMenu } = this.state;
    return (
      <ClickOutside onClickOutside={this.hideMenu} >
        <Col align="center">
          <Button onClick={this.toggleMenu}>
            {username}
          </Button>
          {showMenu &&
            <PosedMenu initialPose="init" pose="open" >
              {children}
            </PosedMenu>}
        </Col>
      </ClickOutside>
    );
  }
}

