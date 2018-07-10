import { connect } from 'react-redux';

import { createList } from 'Src/ducks/entities';
import { AddList } from './AddList';

export const AddListContainer = connect(null, { createList })(AddList);
