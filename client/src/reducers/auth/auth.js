export const types = {
  API_REQUEST: 'AUTH/API_REQUEST',
  CURRENTUSER_SUCCESS: 'AUTH/CURRENTUSER_SUCCESS',
  AUTH_FAILURE: 'AUTH/AUTH_FAILURE',
  CURRENTUSER_FAILURE: 'AUTH/CURRENTUSER_FAILURE'
};

export const actions = {
  requestApi: () => ({
    type: types.API_REQUEST
  }),
  successCurrentUser: payload => ({
    type: types.CURRENTUSER_SUCCESS,
    payload
  }),
  failureAuth: error => ({
    type: types.AUTH_FAILURE,
    error
  }),
  failureCurrentUser: () => ({
    type: types.CURRENTUSER_FAILURE,
  })
};

export const initialState = {
  user: {},
  error: '',
  isLoading: false,
  isAuthenticated: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_REQUEST:
      return {
        ...state,
        user: {},
        error: '',
        isLoading: true
      };
    case types.CURRENTUSER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: '',
        isLoading: false,
        isAuthenticated: true
      };
    case types.AUTH_FAILURE:
      return {
        ...state,
        user: {},
        error: action.error,
        isLoading: false,
        isAuthenticated: false
      };
    case types.CURRENTUSER_FAILURE:
      return {
        ...state,
        user: {},
        error: '',
        isLoading: false,
        isAuthenticated: false
      };
    default:
      return state;
  }
};
