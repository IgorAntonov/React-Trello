import axios from 'axios';

export const boardAPI = {
  getBoards: () => axios.get('/api/board/get_user_boards'),
  postNew: name => axios.post('/api/board/create', { name }),
  putName: (newName, boardId) => axios.put('/api/board/rename', {
    newName,
    boardId
  }),
  delete: boardId => axios.delete('/api/board/delete', { data: { boardId } })
};
