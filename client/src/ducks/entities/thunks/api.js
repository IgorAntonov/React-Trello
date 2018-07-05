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

export const cardAPI = {
  postNew: (name, listId) => axios.post('/api/card/create', {
    name,
    listId
  }),
  putName: (newName, cardId) => axios.put('/api/card/rename', {
    newName,
    cardId
  }),
  putDescription: (description, cardId) => axios.put('/api/card/description', {
    description,
    cardId
  })
};
