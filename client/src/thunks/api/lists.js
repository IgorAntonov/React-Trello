import axios from 'axios';

export const getBoardLists = boardId => axios({
  method: 'post',
  url: '/api/list/get_lists',
  data: {
    boardId
  }
});

export const putNewCardName = (newTitle, listId) => axios({
  method: 'put',
  url: '/api/list/rename',
  data: {
    newTitle,
    listId
  }
});

export const postNewList = (boardId, title) => axios({
  method: 'post',
  url: '/api/list/create',
  data: {
    boardId,
    title
  }
});
