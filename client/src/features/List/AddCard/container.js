import { connect } from 'react-redux';

import { createCard } from 'Src/ducks/entities';
import { AddCard } from './AddCard';

export const AddCardContainer = connect(null, { createCard })(AddCard);
