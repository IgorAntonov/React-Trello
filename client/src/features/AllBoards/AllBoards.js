import React from 'react';
import PropTypes from 'prop-types';

import { Col, Icon } from 'Src/ui';
import { AddBoard } from './AddBoard';
import { BoardLink } from './BoardLink';
import { Flex, Title, FlexBoards } from './style';

export const AllBoards = ({ boards, deleteBoard }) => (
  <Col grow={1} bgColor={p => p.theme.main}>
    <Flex>
      <Icon icon="portrait" width="30px" height="30px" />
      <Title> My Boards </Title>
    </Flex>
    <FlexBoards>
      {boards.map(board => (
        <BoardLink
          boardId={board._id}
          deleteBoard={deleteBoard}
          name={board.name}
          key={board._id}
        />
      ))}
      <AddBoard />
    </FlexBoards>
  </Col>
);

AllBoards.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBoard: PropTypes.func.isRequired
};

