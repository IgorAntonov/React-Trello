import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

import { Row, Icon } from 'Src/ui';
import { themes, themesKeys } from 'Src/helpers';
import {
  Posed,
  Container,
  ThemeButton,
  Title,
  CloseBtn,
  TitleWrapper
} from './style';

export const ThemeChanger = ({ closeModal, setTheme }) => (
  <Portal>
    <Posed initialPose="init" pose="open">
      <Container onClickOutside={() => closeModal('themeChanger')} >
        <TitleWrapper>
          <Title> Colors </Title>
          <CloseBtn onClick={() => closeModal('themeChanger')} >
            <Icon icon="close" />
          </CloseBtn>
        </TitleWrapper>
        <Row wrap="wrap" justify="space-around">
          {themesKeys.map(theme => {
            const color = themes[theme].main;
            return (
              <ThemeButton
                theme={theme}
                color={color}
                key={theme}
                onClick={() => {
                  setTheme(theme);
                  closeModal('themeChanger');
                }}
              />
            );
          })}
        </Row>
      </Container>
    </Posed>
  </Portal>
);

ThemeChanger.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setTheme: PropTypes.func.isRequired
};

