import axios from 'axios';

export const authAPI = {
  signup: (email, password, name) => axios.post('/api/auth/signup', {
    email,
    password,
    name
  }),
  login: (email, password) => axios.post('/api/auth/login', {
    email,
    password
  }),
  logout: () => axios.get('/api/auth/logout'),
  getUser: () => axios.get('/api/auth/currentUser')
};
