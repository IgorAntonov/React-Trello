import axios from 'axios';

export const getUserBoards = () => axios({
  method: 'get',
  url: '/api/board/get_user_boards'
});
