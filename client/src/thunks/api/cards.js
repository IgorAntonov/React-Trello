import axios from 'axios';

export const cardAPI = {
  postNew: (name, listId) => axios.post('/api/card/create', {
    name,
    listId
  })
};

