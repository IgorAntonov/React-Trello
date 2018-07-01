import axios from 'axios';

export const getUserBoards = () => axios({
  method: 'get',
  url: '/api/board/get_user_boards'
});

export const postNewBoard = name => axios({
  method: 'post',
  url: '/api/board/create',
  data: {
    name
  }
});

export const putNewBoardName = (newName, boardId) => axios({
  method: 'put',
  url: '/api/board/rename',
  data: {
    newName,
    boardId
  }
});

export const deleteBoardOnServer = boardId => axios({
  method: 'delete',
  url: '/api/board/delete',
  data: {
    boardId
  }
});
