import { connect } from 'react-redux';

import { getIsModalOpen } from 'Src/ducks/modal';
import { BoardsPage } from './BoardsPage';

const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state)
});

export const BoardsPageContainer = connect(mapStateToProps)(BoardsPage);
