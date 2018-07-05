import { types } from './actions';

export const initialState = {
  isLoading: false,
  error: '',
  boards: {},
  lists: {},
  cards: {}
};

const boards = (state, action) => {
  switch (action.type) {
    case types.BOARD_DELETE:
      return action.payload;
    case types.LIST_DELETE:
      return {
        ...state,
        [action.payload.boardId]: {
          ...state[action.payload.boardId],
          lists: action.payload.filtered
        }
      };
    default:
      return state;
  }
};

const cards = (state, action) => {
  switch (action.type) {
    case types.CARD_RENAME:
      return {
        ...state,
        [action.payload.cardId]: {
          ...state[action.payload.cardId],
          name: action.payload.newName
        }
      };
    case types.CARD_ADD_DESC:
      return {
        ...state,
        [action.payload.cardId]: {
          ...state[action.payload.cardId],
          description: action.payload.description
        }
      };
    case types.CARD_ADD_COMMENT:
      return {
        ...state,
        [action.payload.cardId]: {
          ...state[action.payload.cardId],
          comments: action.payload.comments
        }
      };
    default:
      return state;
  }
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
    case types.BOARD_DELETE:
    case types.LIST_DELETE:
      return {
        ...state,
        boards: boards(state.boards, action)
      };
    case types.CARD_RENAME:
    case types.CARD_ADD_DESC:
    case types.CARD_ADD_COMMENT:
      return {
        ...state,
        cards: cards(state.cards, action)
      };
    default:
      return state;
  }
};
