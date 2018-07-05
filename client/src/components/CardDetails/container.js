import { connect } from 'react-redux';

import {
  addComment, renameCard, addCardDesc,
  getOpenedCardById, getOpenedListTitle
} from 'Src/ducks/entities';
import { getUser } from 'Src/ducks/auth';
import { actions } from 'Src/ducks/modal';
import { CardDetails } from './CardDetails';

const { closeCardDetails } = actions;

const mapStateToProps = state => ({
  card: getOpenedCardById(state),
  listTitle: getOpenedListTitle(state),
  user: getUser(state)
});

export const CardDetailsContainer = connect(
  mapStateToProps,
  {
    closeCardDetails,
    renameCard,
    addCardDesc,
    addComment
  }
)(CardDetails);
