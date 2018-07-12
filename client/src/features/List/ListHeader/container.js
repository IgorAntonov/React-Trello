import { connect } from 'react-redux';

import { deleteList } from 'Src/ducks/entities';
import { ListHeader } from './ListHeader';

export const ListHeaderContainer = connect(
  null,
  { deleteList }
)(ListHeader);
