import { connect } from 'react-redux';

import { actions } from 'Src/ducks/modal';
import { setTheme } from 'Src/ducks/theme';

import { ThemeChanger } from './ThemeChanger';

const { closeModal } = actions;

export const ThemeChangerContainer = connect(null, { closeModal, setTheme })(ThemeChanger);
