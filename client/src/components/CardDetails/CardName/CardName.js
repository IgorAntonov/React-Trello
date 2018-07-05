import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, IconContainer, ContentContainer, TitleIcon, NameInput, Span } from './style';

export const CardName = ({ cardName, listTitle }) => (
  <Wrapper>
    <IconContainer>
      <TitleIcon />
    </IconContainer>
    <ContentContainer>
      <NameInput defaultValue={cardName} />
      <Span>in list {listTitle}</Span>
    </ContentContainer>
  </Wrapper>
);


CardName.propTypes = {
  cardName: PropTypes.string.isRequired,
  listTitle: PropTypes.string.isRequired
};
