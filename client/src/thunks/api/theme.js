import axios from 'axios';

export const themeAPI = {
  put: theme => axios.put('/api/theme/set', { theme }),
  get: () => axios.get('/api/theme/get')
};

