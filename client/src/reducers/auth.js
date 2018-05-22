export const types = {
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE'
};

export const signup = payload => ({
  type: types.SIGNUP_REQUEST,
  payload
});

const initialState = {
  user: null,
  error: '',
  isLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return { ...state, isLoading: true, error: null };
    case types.SIGNUP_SUCCESS:
      return { ...state, isLoading: false, user: action.payload };
    case types.SIGNUP_FAILURE:
      return { ...state, isLoading: false, error: action.error };
    default:
      return state;
  }
};
