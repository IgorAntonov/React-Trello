import { createSelector } from 'reselect';

import { getOpenedCardId, getOpenedListId } from 'Src/ducks/modal';

const listIdsByBoardId = (state, boardId) => state.entities.boards[boardId].lists;

export const getAllBoards = createSelector(
  state => state.entities.boards,
  allBoards => Object.values(allBoards)
);

export const getAllLists = createSelector(
  state => state.entities.lists,
  allLists => allLists
);

export const getAllCards = createSelector(
  state => state.entities.cards,
  allCards => allCards
);

export const getListsByBoardId = createSelector(
  [listIdsByBoardId, getAllLists],
  (listIds, allLists) => listIds.map(id => allLists[id])
);

export const getIsLoading = createSelector(
  state => state.entities.isLoading,
  flag => flag
);

export const getBoardName = createSelector(
  (state, boardId) => state.entities.boards[boardId].name,
  name => name
);

export const getCardById = createSelector(
  (state, cardId) => state.entities.cards[cardId],
  card => card
);

export const getOpenedCardById = createSelector(
  [getAllCards, getOpenedCardId],
  (cards, id) => cards[id]
);

export const getOpenedListTitle = createSelector(
  [getAllLists, getOpenedListId],
  (lists, id) => lists[id].title
);

export const getIsShowListSpinner = createSelector(
  state => state.entities.showListSpinner,
  flag => flag
);

