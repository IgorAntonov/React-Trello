import axios from 'axios';

export const getBoardLists = boardId => axios({
  method: 'post',
  url: '/api/list/get_lists',
  data: {
    boardId
  }
});
