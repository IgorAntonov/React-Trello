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
