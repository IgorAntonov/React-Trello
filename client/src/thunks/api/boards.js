import axios from 'axios';

export const getUserBoards = () => axios({
  method: 'get',
  url: '/api/board/get_user_boards'
});

export const putNewBoardName = (newName, boardId) => axios({
  method: 'put',
  url: '/api/board/rename',
  data: {
    newName,
    boardId
  }
});
