import React from 'react';
import PropTypes from 'prop-types';

import { Title, TitleWrapper, DeleteButton, DeleteIcon, DeleteConfirm, ConfirmBtn } from './style';

export const ListHeader = ({
  title, handleRenameList, isConfirmShow, showConfirm, hideConfirm, listId, boardId
}) => (
  <TitleWrapper>
    <Title
      defaultValue={title}
      onBlur={handleRenameList}
      onKeyPress={handleRenameList}
    />
    <DeleteButton onClick={showConfirm} >
      <DeleteIcon />
    </DeleteButton>
    {isConfirmShow &&
      <DeleteConfirm onClickOutside={hideConfirm} >
        <ConfirmBtn onClick={() => console.log(listId, boardId)}>
          Delete this list?
        </ConfirmBtn>
      </DeleteConfirm>
    }
  </TitleWrapper>
);

ListHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRenameList: PropTypes.func.isRequired,
  isConfirmShow: PropTypes.bool.isRequired,
  showConfirm: PropTypes.func.isRequired,
  hideConfirm: PropTypes.func.isRequired,
  listId: PropTypes.string.isRequired,
  boardId: PropTypes.string.isRequired
};
