import { createAction } from 'redux-act';

export const actions = {
  requestBoards: createAction('entities/BOARDS_REQUEST'),
  refreshBoards: createAction('entities/BOARDS_REFRESH'),
  successBoards: createAction('entities/BOARDS_SUCCESS'),
  failureBoards: createAction('entities/BOARDS_FAILURE'),
  deleteBoard: createAction('entities/BOARD_DELETE'),
  deleteList: createAction('entities/LIST_DELETE'),
  reorderList: createAction('entities/LIST_REORDER'),
  renameCard: createAction('entities/CARD_RENAME'),
  deleteCard: createAction('entities/CARD_DELETE'),
  addCardDesc: createAction('entities/CARD_ADD_DESC'),
  addComment: createAction('entities/CARD_ADD_COMMENT'),
  moveFromToList: createAction('entities/LIST_MOVE_FROM_TO'),
  showListSpinner: createAction('entities/SHOW_LIST_SPINNER'),
  hideListSpinner: createAction('entities/HIDE_LIST_SPINNER'),
};
