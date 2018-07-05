export const types = {
  BOARDS_REQUEST: 'ENTITIES/BOARDS_REQUEST',
  BOARDS_REFRESH: 'ENTITIES/BOARDS_REFRESH',
  BOARDS_SUCCESS: 'ENTITIES/BOARDS_SUCCESS',
  BOARDS_FAILURE: 'ENTITIES/BOARDS_FAILURE',
  BOARD_DELETE: 'ENTITIES/BOARD_DELETE',
  LIST_DELETE: 'ENTITIES/LIST_DELETE',
  CARD_RENAME: 'ENTITIES/CARD_RENAME',
  CARD_ADD_DESC: 'ENTITIES/CARD_ADD_DESC'
};

export const actions = {
  requestBoards: () => ({
    type: types.BOARDS_REQUEST
  }),
  refreshBoards: () => ({
    type: types.BOARDS_REFRESH
  }),
  successBoards: payload => ({
    type: types.BOARDS_SUCCESS,
    payload
  }),
  failureBoards: error => ({
    type: types.BOARDS_FAILURE,
    error
  }),
  deleteBoard: payload => ({
    type: types.BOARD_DELETE,
    payload
  }),
  deleteList: payload => ({
    type: types.LIST_DELETE,
    payload
  }),
  renameCard: payload => ({
    type: types.CARD_RENAME,
    payload
  }),
  addCardDesc: payload => ({
    type: types.CARD_ADD_DESC,
    payload
  })
};
