import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import {
  Posed,
  Container,
  Title,
  TitleWrapper,
  FlexWrapper,
  BoardLink
} from './style';

export const BoardsMenu = ({ closeModal, boards }) => (
  <Portal>
    <Posed initialPose="init" pose="open" >
      <Container onClickOutside={() => closeModal('boardsMenu')} >
        <TitleWrapper>
          <Title>Personal Boards</Title>
        </TitleWrapper>
        <FlexWrapper>
          {boards.map(board => (
            <BoardLink
              key={board._id}
              to={`/boards/${board._id}`}
              onClick={() => closeModal('boardsMenu')}
            >
              {board.name}
            </BoardLink>
          ))}
        </FlexWrapper>
      </Container>
    </Posed>
  </Portal>
);

BoardsMenu.propTypes = {
  closeModal: PropTypes.func.isRequired,
  boards: PropTypes.arrayOf(PropTypes.object).isRequired
};

