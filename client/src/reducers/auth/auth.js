export const types = {
  API_REQUEST: 'AUTH/API_REQUEST',
  CURRENTUSER_SUCCESS: 'AUTH/CURRENTUSER_SUCCESS',
  CURRENTUSER_FAILURE: 'AUTH/CURRENTUSER_FAILURE',
  LOGOUT_SUCCESS: 'AUTH/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'AUTH/LOGOUT_FAILURE',
  AUTH_FAILURE: 'AUTH/AUTH_FAILURE'
};

export const actions = {
  requestApi: () => ({
    type: types.API_REQUEST
  }),
  successCurrentUser: payload => ({
    type: types.CURRENTUSER_SUCCESS,
    payload
  }),
  successLogout: () => ({
    type: types.LOGOUT_SUCCESS
  }),
  failureLogout: () => ({
    type: types.LOGOUT_FAILURE
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
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        error: '',
        isLoading: false,
        isAuthenticated: false
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false
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
