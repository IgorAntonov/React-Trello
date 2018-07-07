import { connect } from 'react-redux';

import {
  addComment, renameCard, addCardDesc, deleteCard,
  getOpenedCardById, getOpenedListTitle
} from 'Src/ducks/entities';
import { getUser } from 'Src/ducks/auth';
import { actions, getOpenedListId } from 'Src/ducks/modal';
import { CardDetails } from './CardDetails';

const { closeCardDetails } = actions;

const mapStateToProps = state => ({
  card: getOpenedCardById(state),
  listTitle: getOpenedListTitle(state),
  listId: getOpenedListId(state),
  user: getUser(state)
});

export const CardDetailsContainer = connect(
  mapStateToProps,
  {
    closeCardDetails,
    renameCard,
    deleteCard,
    addCardDesc,
    addComment
  }
)(CardDetails);
