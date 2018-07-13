import { createAction } from 'redux-act';

export const actions = {
  requestAuth: createAction('auth/AUTH_REQUEST'),
  successCurrentUser: createAction('auth/CURRENTUSER_SUCCESS'),
  successLogout: createAction('auth/LOGOUT_SUCCESS'),
  failureLogout: createAction('auth/LOGOUT_FAILURE'),
  failureAuth: createAction('auth/AUTH_FAILURE'),
  failureCurrentUser: createAction('auth/CURRENTUSER_FAILURE')
};
