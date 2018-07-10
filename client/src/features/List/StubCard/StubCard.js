import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, CardButton } from './style';

export const StubCard = ({ name }) => (
  <Wrapper>
    <CardButton>
      {name}
    </CardButton>
  </Wrapper>
);

StubCard.propTypes = {
  name: PropTypes.string.isRequired
};
