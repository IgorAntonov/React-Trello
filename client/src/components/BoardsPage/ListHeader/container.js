import { connect } from 'react-redux';

import { deleteList } from 'Src/thunks/lists';
import { ListHeader } from './ListHeader';

export const ListHeaderContainer = connect(null, { deleteList })(ListHeader);
