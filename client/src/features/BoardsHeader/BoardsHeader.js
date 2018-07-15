import React from 'react';
import PropTypes from 'prop-types';

import { Row, Button } from 'Src/ui';
import { DropdownMenu } from './DropdownMenu';
import { CreateBoard } from './CreateBoard';
import {
  PosedFlex,
  Title,
  MenuButton
} from './style';

export const BoardsHeader = ({ logoutUser, openModal, user }) => (
  <Row
    justify="space-between"
    align="center"
    padding="0.5rem"
    bgColor={p => p.theme.darker}
  >
    <PosedFlex justify="flex-start" initialPose="right" pose="mount" >
      <Button onClick={() => openModal('boardsMenu')} >Boards</Button>
    </PosedFlex>
    <Title to="/">Reactive Trello </Title>
    <PosedFlex justify="flex-end" initialPose="left" pose="mount" >
      <CreateBoard />
      <DropdownMenu username={user.username}>
        <MenuButton onClick={() => openModal('themeChanger')} >Change Background</MenuButton>
        <MenuButton onClick={logoutUser} >Logout</MenuButton>
      </DropdownMenu>
    </PosedFlex>
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

