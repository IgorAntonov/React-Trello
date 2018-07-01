import axios from 'axios';

export const listAPI = {
  putName: (newTitle, listId) => axios.put('/api/list/rename', {
    newTitle,
    listId
  }),
  postNew: (boardId, title) => axios.post('/api/list/create', {
    boardId,
    title
  })
};

