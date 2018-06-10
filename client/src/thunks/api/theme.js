import axios from 'axios';

export const updateTheme = theme => axios({
  method: 'put',
  url: '/api/theme/set',
  data: {
    theme
  }
});

export const getTheme = () => axios({
  method: 'get',
  url: '/api/theme/get'
});
