export const types = {
  THEME_REQUEST: 'THEME/THEME_REQUEST',
  THEME_SUCCESS: 'THEME/THEME_SUCCESS',
  THEME_FAILURE: 'THEME/THEME_FAILURE'
};

export const actions = {
  requestTheme: () => ({
    type: types.THEME_REQUEST
  }),
  successTheme: theme => ({
    type: types.THEME_SUCCESS,
    theme
  }),
  failureTheme: error => ({
    type: types.THEME_FAILURE,
    error
  })
};

