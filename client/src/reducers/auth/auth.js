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
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.API_REQUEST:
      return {
        ...state, isLoading: true, user: {}, error: ''
      };
    case types.CURRENTUSER_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload, error: ''
      };
    case types.AUTH_FAILURE:
      return {
        ...state, isLoading: false, user: {}, error: action.error
      };
    case types.CURRENTUSER_FAILURE:
      return {
        ...state, isLoading: false, user: {}, error: ''
      };
    default:
      return state;
  }
};
