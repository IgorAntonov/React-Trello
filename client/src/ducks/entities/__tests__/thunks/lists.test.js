import moxios from 'moxios';

import { mockStore } from 'Config/storeMock';
import { actions as expectedActions } from '../../actions';
import {
  renameList,
  createList,
  deleteList,
  reorderList,
  moveFromToList
} from '../../thunks/lists';
import { refreshUserBoards } from '../../thunks/common';

jest.mock('../../thunks/common');
refreshUserBoards.mockImplementation(() => ({
  type: 'test/REFRESH_USER_BOARDS'
}));

const setup = (status, data) => {
  moxios.wait(() => {
    const request = moxios.requests.mostRecent();
    request.respondWith({
      status,
      response: data
    });
  });
};

describe('thunk lists/renameList should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const newTitle = 'title';
    const listId = 'id';
    setup(200, {});
    const store = mockStore({});

    await store.dispatch(renameList(newTitle, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
  });

  test('on failure', async () => {
    const newTitle = 'title';
    const listId = 'id';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(renameList(newTitle, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk lists/createList should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const boardId = 'boardId';
    const title = 'title';
    setup(200, {});
    const store = mockStore({});

    await store.dispatch(createList(boardId, title));
    const actions = store.getActions();
    expect(actions).toHaveLength(3);
    expect(actions[0]).toEqual(expectedActions.showListSpinner());
    expect(actions[1]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
    expect(actions[2]).toEqual(expectedActions.hideListSpinner());
  });

  test('on failure', async () => {
    const boardId = 'boardId';
    const title = 'title';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({});

    await store.dispatch(createList(boardId, title));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.showListSpinner());
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk lists/deleteList should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const listId = 'listId';
    const boardId = 'boardId123';
    setup(200, {});
    const store = mockStore({
      entities: {
        boards: {
          boardId123: {
            lists: ['listId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(deleteList(boardId, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.deleteList({
      filtered: ['1', '2'],
      boardId
    }));
    expect(actions[1]).toEqual({ type: 'test/REFRESH_USER_BOARDS' });
  });

  test('on failure', async () => {
    const listId = 'listId';
    const boardId = 'boardId123';
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({
      entities: {
        boards: {
          boardId123: {
            lists: ['listId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(deleteList(boardId, listId));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.deleteList({
      filtered: ['1', '2'],
      boardId
    }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk lists/reorderList should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const listId = 'listId';
    const cardId = 'cardId';
    const sourceIndex = 0;
    const destinationIndex = 2;
    setup(200, {});
    const store = mockStore({
      entities: {
        lists: {
          listId: {
            cards: ['cardId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(reorderList(listId, cardId, sourceIndex, destinationIndex));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.reorderList({
      cards: ['1', '2', 'cardId'],
      listId
    }));
  });

  test('on failure', async () => {
    const listId = 'listId';
    const cardId = 'cardId';
    const sourceIndex = 0;
    const destinationIndex = 2;
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({
      entities: {
        lists: {
          listId: {
            cards: ['cardId', '1', '2']
          }
        }
      }
    });

    await store.dispatch(reorderList(listId, cardId, sourceIndex, destinationIndex));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.reorderList({
      cards: ['1', '2', 'cardId'],
      listId
    }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});

describe('thunk lists/moveFromToList should create all expected actions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('on success', async () => {
    const sourceId = 'sourceId';
    const destinationId = 'destId';
    const cardId = 'cardId';
    const start = 0;
    const end = 2;
    setup(200, {});
    const store = mockStore({
      entities: {
        lists: {
          sourceId: {
            cards: ['cardId', '1', '2']
          },
          destId: {
            cards: ['3', '4']
          }
        }
      }
    });

    await store.dispatch(moveFromToList(sourceId, destinationId, cardId, start, end));
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(expectedActions.moveFromToList({
      sourceId,
      destinationId,
      sourceCards: ['1', '2'],
      destinationCards: ['3', '4', 'cardId']
    }));
  });
  test('on failure', async () => {
    const sourceId = 'sourceId';
    const destinationId = 'destId';
    const cardId = 'cardId';
    const start = 0;
    const end = 2;
    const data = {
      error: { message: 'error message' }
    };
    setup(400, data);
    const store = mockStore({
      entities: {
        lists: {
          sourceId: {
            cards: ['cardId', '1', '2']
          },
          destId: {
            cards: ['3', '4']
          }
        }
      }
    });

    await store.dispatch(moveFromToList(sourceId, destinationId, cardId, start, end));
    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0]).toEqual(expectedActions.moveFromToList({
      sourceId,
      destinationId,
      sourceCards: ['1', '2'],
      destinationCards: ['3', '4', 'cardId']
    }));
    expect(actions[1]).toEqual(expectedActions.failureBoards(data.error));
  });
});
