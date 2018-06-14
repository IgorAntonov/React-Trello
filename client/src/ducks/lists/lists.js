export const types = {
  LISTS_REQUEST: 'LISTS/LISTS_REQUEST',
  LISTS_SUCCESS: 'LISTS/LISTS_SUCCESS',
  LISTS_FAILURE: 'LISTS/LISTS_FAILURE',
};

export const actions = {
  requestLists: () => ({
    type: types.LISTS_REQUEST
  }),
  successLists: payload => ({
    type: types.LISTS_SUCCESS,
    payload
  }),
  failureLists: error => ({
    type: types.LISTS_FAILURE,
    error
  })
};

export const initialState = {
  isLoading: false,
  error: '',
  lists: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LISTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case types.LISTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        lists: { ...state.lists, ...action.payload }
      };
    case types.LISTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
};
