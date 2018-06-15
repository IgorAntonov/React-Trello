import { schema } from 'normalizr';

const card = new schema.Entity(
  'cards',
  undefined,
  { idAttribute: item => item._id }
);

const list = new schema.Entity(
  'lists',
  { cards: [card] },
  { idAttribute: item => item._id }
);

const board = new schema.Entity(
  'boards',
  { lists: [list] },
  { idAttribute: item => item._id }
);

export const boardSchema = [board];

