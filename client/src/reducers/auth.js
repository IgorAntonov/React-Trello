export const types = {
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE',
  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',
  CURRENTUSER_REQUEST: 'AUTH/CURRENTUSER_REQUEST',
  CURRENTUSER_SUCCESS: 'AUTH/CURRENTUSER_SUCCESS',
  CURRENTUSER_FAILURE: 'AUTH/CURRENTUSER_FAILURE'
};

export const actions = {
  requestSignup: () => ({
    type: types.SIGNUP_REQUEST
  }),
  successSignup: payload => ({
    type: types.SIGNUP_SUCCESS,
    payload
  }),
  failureSignup: error => ({
    type: types.SIGNUP_FAILURE,
    error
  }),
  requestCurrentUser: () => ({
    type: types.CURRENTUSER_REQUEST
  }),
  successCurrentUser: payload => ({
    type: types.CURRENTUSER_SUCCESS,
    payload
  }),
  failureCurrentUser: () => ({
    type: types.CURRENTUSER_FAILURE,
  }),
  requestLogin: () => ({
    type: types.LOGIN_REQUEST
  }),
  successLogin: payload => ({
    type: types.LOGIN_SUCCESS,
    payload
  }),
  failureLogin: error => ({
    type: types.LOGIN_FAILURE,
    error
  })
};

const initialState = {
  user: {},
  error: '',
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state, isLoading: true, user: {}, error: ''
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload, error: ''
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state, isLoading: false, user: {}, error: action.error
      };
    case types.CURRENTUSER_REQUEST:
      return {
        ...state, isLoading: true, user: {}, error: ''
      };
    case types.CURRENTUSER_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload, error: ''
      };
    case types.CURRENTUSER_FAILURE:
      return {
        ...state, isLoading: false, user: {}, error: ''
      };
    case types.LOGIN_REQUEST:
      return {
        ...state, isLoading: true, user: {}, error: ''
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state, isLoading: false, user: action.payload, error: ''
      };
    case types.LOGIN_FAILURE:
      return {
        ...state, isLoading: false, user: {}, error: action.error
      };
    default:
      return state;
  }
};
