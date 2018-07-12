import React from 'react';
import PropTypes from 'prop-types';

import { Row, Button } from 'Src/ui';
import { Flex, Title, MenuButton } from './style';
import { DropdownMenu } from './DropdownMenu';
import { CreateBoard } from './CreateBoard';

export const BoardsHeader = ({ logoutUser, openModal, user }) => (
  <Row
    justify="space-between"
    align="center"
    padding="0.5rem"
    bgColor={p => p.theme.darker}
  >
    <Flex justify="flex-start" >
      <Button onClick={() => openModal('boardsMenu')} >Boards</Button>
    </Flex>
    <Title to="/" >
      Reactive Trello
    </Title>
    <Flex justify="flex-end" >
      <CreateBoard />
      <DropdownMenu username={user.username}>
        <MenuButton onClick={() => openModal('themeChanger')} >Change Background</MenuButton>
        <MenuButton onClick={logoutUser} >Logout</MenuButton>
      </DropdownMenu>
    </Flex>
  </Row>
);

BoardsHeader.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userId: PropTypes.string,
    username: PropTypes.string
  }).isRequired
};

