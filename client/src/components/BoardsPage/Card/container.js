import { connect } from 'react-redux';

import { getCardById } from 'Src/ducks/entities';
import { Card } from './Card';

const mapStateToProps = (state, ownProps) => ({
  card: getCardById(state, ownProps.cardId)
});

export const CardContainer = connect(mapStateToProps)(Card);
