import { createSelector } from 'reselect';

export const types = {
  BOARDS_REQUEST: 'BOARDS/BOARDS_REQUEST',
  BOARDS_SUCCESS: 'BOARDS/BOARDS_SUCCESS',
  BOARDS_FAILURE: 'BOARDS/BOARDS_FAILURE',
};

export const actions = {
  requestBoards: () => ({
    type: types.BOARDS_REQUEST
  }),
  successBoards: payload => ({
    type: types.BOARDS_SUCCESS,
    payload
  }),
  failureBoards: error => ({
    type: types.BOARDS_FAILURE,
    error
  })
};

export const initialState = {
  isLoading: false,
  error: '',
  boards: {},
  lists: {},
  cards: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BOARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case types.BOARDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      };
    case types.BOARDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};

const isLoadingSelector = state => state.entities.isLoading;
const allBoardsSelector = state => {
  const { boards } = state.entities;
  return Object.values(boards);
};

export const getIsLoading = createSelector(isLoadingSelector, flag => flag);

export const getAllBoards = createSelector(allBoardsSelector, boards => boards);
