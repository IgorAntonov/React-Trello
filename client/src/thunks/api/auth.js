import axios from 'axios';

export const signupUser = (email, password, name) => axios({
  method: 'post',
  url: '/api/auth/signup',
  data: {
    email,
    password,
    name
  }
});

export const loginUser = (email, password) => axios({
  method: 'post',
  url: '/api/auth/login',
  data: {
    email,
    password
  }
});

export const logoutUser = () => axios.get('/api/auth/logout');

export const fetchCurrentUser = () => axios.get('/api/auth/currentUser');
