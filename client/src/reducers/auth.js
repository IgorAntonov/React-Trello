export const types = {
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE'
};

export const requestSignup = () => ({
  type: types.SIGNUP_REQUEST
});
export const successSignup = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload
});
export const failureSignup = error => ({
  type: types.SIGNUP_FAILURE,
  error
});

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
    default:
      return state;
  }
};
