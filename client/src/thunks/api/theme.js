import axios from 'axios';

export const updateTheme = theme => axios({
  method: 'put',
  url: '/api/theme/set',
  data: {
    theme
  }
});

export const fetchTheme = () => axios({
  method: 'get',
  url: '/api/theme/get'
});
