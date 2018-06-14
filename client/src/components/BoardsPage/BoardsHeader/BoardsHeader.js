import React from 'react';
import PropTypes from 'prop-types';

import { Button, Icon } from 'Components/shared';
import { Wrapper, FlexWrapper, Title, MenuButton, CreateButton } from './style';
import { DropdownMenu } from '../DropdownMenu';

export const BoardsHeader = ({ logout, openModal, user }) => (
  <Wrapper>
    <FlexWrapper justify="flex-start" >
      <Button onClick={() => openModal('boardsMenu')} >Boards</Button>
    </FlexWrapper>
    <Title>Reactive Trello</Title>
    <FlexWrapper justify="flex-end" >
      <CreateButton>
        <Icon
          icon="plus"
          width="24px"
          height="24px"
          viewBox="48"
        />
      </CreateButton>
      <DropdownMenu username={user.username}>
        <MenuButton onClick={() => openModal('themeChanger')} >Change Background</MenuButton>
        <MenuButton onClick={logout} >Logout</MenuButton>
      </DropdownMenu>
    </FlexWrapper>
  </Wrapper>
);

BoardsHeader.propTypes = {
  logout: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired
};

