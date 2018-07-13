import { createAction } from 'redux-act';

export const actions = {
  requestTheme: createAction('theme/THEME_REQUEST'),
  successTheme: createAction('theme/THEME_SUCCESS'),
  failureTheme: createAction('theme/THEME_FAILURE')
};
