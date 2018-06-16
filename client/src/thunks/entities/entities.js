import { normalize } from 'normalizr';

import { boardSchema } from 'Src/helpers';
import { actions } from 'Src/ducks/entities';
import { getUserBoards } from '../api';

export const fetchUserBoards = () => async dispatch => {
  dispatch(actions.requestBoards());

  try {
    const { data: { boards } } = await getUserBoards();

    const { entities } = normalize(boards, boardSchema);

    dispatch(actions.successBoards(entities));
  } catch (err) {
    const { error } = err.response.data;
    dispatch(actions.failureBoards(error));
  }
};
