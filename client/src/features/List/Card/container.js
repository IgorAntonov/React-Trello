import { connect } from 'react-redux';

import { getCardById } from 'Src/ducks/entities';
import { actions } from 'Src/ducks/modal';
import { Card } from './Card';

const { openCardDetails } = actions;

const mapStateToProps = (state, ownProps) => ({
  card: getCardById(state, ownProps.cardId)
});

export const CardContainer = connect(mapStateToProps, { openCardDetails })(Card);
