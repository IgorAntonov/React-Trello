import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from 'Components/shared';
import { Wrapper, MenuWrapper } from './style';

export class DropdownMenu extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired
  }
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  showMenu = () => {
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  closeMenu = () => {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  render() {
    const { children, username } = this.props;
    const { showMenu } = this.state;
    return (
      <Wrapper>
        <Button onClick={this.showMenu}>
          {username}
        </Button>
        {showMenu &&
          <MenuWrapper>
            {children}
          </MenuWrapper>
        }
      </Wrapper>
    );
  }
}

