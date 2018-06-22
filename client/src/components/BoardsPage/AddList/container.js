import { connect } from 'react-redux';

import { createList } from 'Src/thunks/lists';
import { AddList } from './AddList';

export const AddListContainer = connect(null, { createList })(AddList);
