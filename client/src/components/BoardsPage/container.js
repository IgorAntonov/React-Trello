import { connect } from 'react-redux';

import { getIsModalOpen, actions } from 'Src/ducks/modal';

import { BoardsPage } from './BoardsPage';

const { closeModal } = actions;

const mapStateToProps = state => ({
  isModalOpen: getIsModalOpen(state)
});

export const BoardsPageContainer = connect(mapStateToProps, { closeModal })(BoardsPage);
