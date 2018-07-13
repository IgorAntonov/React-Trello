import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Col, Row, LoadingSpinner } from 'Src/ui';
import { BoardTitle } from './BoardTitle';
import { AddList } from './AddList';
import { List } from '../List';
import { CardDetails } from '../CardDetails';
import { FlexBoard, SpinnerWrapper } from './style';

export const Board = ({
  lists, renameList, createList, renameBoard,
  boardName, isCardDetailsOpen, match, isListSpinnerShow
}) => (
  <Fragment>
    <Col
      grow={1}
      padding="0.5rem 1rem"
      bgColor={p => p.theme.main}
    >
      <Row align="flex-start" margin="0 0 0.8rem 0" >
        <BoardTitle
          title={boardName}
          renameBoard={renameBoard}
          key={match.params.id}
          boardId={match.params.id}
        />
      </Row>
      <FlexBoard>
        {lists.map(list => (
          <List
            list={list}
            renameList={renameList}
            boardId={match.params.id}
            key={list._id}
          />
        ))}
        {isListSpinnerShow &&
          <SpinnerWrapper>
            <LoadingSpinner />
          </SpinnerWrapper>}
        <AddList
          boardId={match.params.id}
          createList={createList}
        />
      </FlexBoard>
    </Col>
    {isCardDetailsOpen && <CardDetails />}
  </Fragment>
);

Board.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  renameList: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
  renameBoard: PropTypes.func.isRequired,
  boardName: PropTypes.string.isRequired,
  isCardDetailsOpen: PropTypes.bool.isRequired,
  isListSpinnerShow: PropTypes.bool.isRequired,
  match: PropTypes.shape({}).isRequired
};

