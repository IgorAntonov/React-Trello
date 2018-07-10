import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'Components/shared';
import { Wrapper, FlexWrapper, Title, MenuButton } from './style';
import { DropdownMenu } from './DropdownMenu';
import { CreateBoard } from './CreateBoard';

export const BoardsHeader = ({ logoutUser, openModal, user }) => (
  <Wrapper>
    <FlexWrapper justify="flex-start" >
      <Button onClick={() => openModal('boardsMenu')} >Boards</Button>
    </FlexWrapper>
    <Title to="/" >
      Reactive Trello
    </Title>
    <FlexWrapper justify="flex-end" >
      <CreateBoard />
      <DropdownMenu username={user.username}>
        <MenuButton onClick={() => openModal('themeChanger')} >Change Background</MenuButton>
        <MenuButton onClick={logoutUser} >Logout</MenuButton>
      </DropdownMenu>
    </FlexWrapper>
  </Wrapper>
);

BoardsHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.shape({}).isRequired
};

