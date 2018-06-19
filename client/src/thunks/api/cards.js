import axios from 'axios';

export const addCard = (name, listId) => axios({
  method: 'post',
  url: '/api/card/create',
  data: {
    name,
    listId
  }
});

