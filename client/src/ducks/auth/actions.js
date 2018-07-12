export const types = {
  AUTH_REQUEST: 'AUTH/AUTH_REQUEST',
  CURRENTUSER_SUCCESS: 'AUTH/CURRENTUSER_SUCCESS',
  CURRENTUSER_FAILURE: 'AUTH/CURRENTUSER_FAILURE',
  LOGOUT_SUCCESS: 'AUTH/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'AUTH/LOGOUT_FAILURE',
  AUTH_FAILURE: 'AUTH/AUTH_FAILURE'
};

export const actions = {
  requestApi: () => ({
    type: types.AUTH_REQUEST
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
