import axios from 'axios';

export const listAPI = {
  putName: (newTitle, listId) => axios.put('/api/list/rename', {
    newTitle,
    listId
  }),
  postNew: (boardId, title) => axios.post('/api/list/create', {
    boardId,
    title
  }),
  delete: (boardId, listId) => axios.delete('/api/list/delete', {
    data: { boardId, listId }
  })
};

