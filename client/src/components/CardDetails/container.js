import { connect } from 'react-redux';

import { renameCard, addCardDesc, getOpenedCardById, getOpenedListTitle } from 'Src/ducks/entities';
import { actions } from 'Src/ducks/modal';
import { CardDetails } from './CardDetails';

const { closeCardDetails } = actions;

const mapStateToProps = state => ({
  card: getOpenedCardById(state),
  listTitle: getOpenedListTitle(state)
});

export const CardDetailsContainer = connect(
  mapStateToProps,
  { closeCardDetails, renameCard, addCardDesc }
)(CardDetails);
