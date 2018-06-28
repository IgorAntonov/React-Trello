import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClickOutside from 'react-click-outside';

import { Icon } from 'Components/shared';
import { Wrapper, CreateButton, CreateInput } from './style';

export class CreateBoard extends Component {
  static propTypes = {

  }
  state = {
    showCreateInput: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      showCreateInput: !prevState.showCreateInput
    }), () => this.state.showCreateInput && this.input.focus());
  }
  hideInput = () => {
    this.setState({
      showCreateInput: false
    });
  }

  render() {
    const { showCreateInput } = this.state;
    return (
      <ClickOutside onClickOutside={this.hideInput} >
        <Wrapper >
          { showCreateInput && <CreateInput innerRef={x => { this.input = x; }} /> }
          <CreateButton onClick={this.handleClick} >
            <Icon
              icon={showCreateInput ? 'ok' : 'plus'}
              width="24px"
              height="24px"
              viewBox="48"
            />
          </CreateButton>
        </Wrapper>
      </ClickOutside>
    );
  }
}
