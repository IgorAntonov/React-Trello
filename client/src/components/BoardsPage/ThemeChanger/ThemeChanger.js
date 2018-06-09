import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

import { Icon } from 'Components/shared';
import { themes, themesKeys } from 'Src/helpers';
import { Container, ThemeButton, Title, Wrapper, CloseBtn, TitleWrapper } from './style';

export const ThemeChanger = ({ closeModal }) => (
  <Portal>
    <Container>
      <TitleWrapper>
        <Title>
          Colors
        </Title>
        <CloseBtn onClick={closeModal} >
          <Icon icon="close" width="24px" height="24px" viewBox="48" />
        </CloseBtn>
      </TitleWrapper>
      <Wrapper>
        {
          themesKeys.map(theme => {
            const color = themes[theme].main;
            return <ThemeButton theme={theme} color={color} key={theme} />;
          })
        }
      </Wrapper>
    </Container>
  </Portal>
);

ThemeChanger.propTypes = {
  closeModal: PropTypes.func.isRequired
};

