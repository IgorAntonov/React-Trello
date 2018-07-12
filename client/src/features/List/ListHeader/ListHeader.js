import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'Src/ui';
import {
  Title,
  TitleWrapper,
  DeleteButton,
  DeleteConfirm,
  ConfirmBtn
} from './style';

export const ListHeader = ({
  title, renameList, isConfirmShow, showConfirm,
  hideConfirm, listId, boardId, deleteList
}) => (
  <TitleWrapper>
    <Title
      defaultValue={title}
      onBlur={renameList}
      onKeyPress={renameList}
    />
    <DeleteButton onClick={showConfirm} >
      <Icon icon="close" />
    </DeleteButton>
    {isConfirmShow &&
      <DeleteConfirm onClickOutside={hideConfirm} >
        <ConfirmBtn onClick={() => deleteList(boardId, listId)}>
          Delete this list?
        </ConfirmBtn>
      </DeleteConfirm>}
  </TitleWrapper>
);

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  renameList: PropTypes.func.isRequired,
  isConfirmShow: PropTypes.bool.isRequired,
  showConfirm: PropTypes.func.isRequired,
  hideConfirm: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired,
  deleteList: PropTypes.func.isRequired
};
