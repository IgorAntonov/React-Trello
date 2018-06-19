import { connect } from 'react-redux';

import { createCard } from 'Src/thunks/cards';
import { AddCard } from './AddCard';

export const AddCardContainer = connect(null, { createCard })(AddCard);
