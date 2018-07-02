import { createSelector } from 'reselect';

const listIdsByBoardId = (state, boardId) => state.entities.boards[boardId].lists;
const allListsSelector = state => state.entities.lists;

export const getAllLists = createSelector(allListsSelector, lists => lists);

export const getListsByBoardId = createSelector(
  [listIdsByBoardId, allListsSelector],
  (listIds, allLists) => listIds.map(id => allLists[id])
);

export const getIsLoading = createSelector(
  state => state.entities.isLoading,
  flag => flag
);

export const getAllBoards = createSelector(
  state => state.entities.boards,
  allBoards => Object.values(allBoards)
);


export const getBoardName = createSelector(
  (state, boardId) => state.entities.boards[boardId].name,
  name => name
);

export const getCardById = createSelector(
  (state, cardId) => state.entities.cards[cardId],
  card => card
);
