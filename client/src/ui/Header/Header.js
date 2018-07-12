import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'Src/ui';

export const Header = ({
  justify, bgColor, children, ...props
}) => (
  <Row
    justify={justify}
    align="center"
    padding="0.5rem"
    bgColor={bgColor}
    {...props}
  >
    {children}
  </Row>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array
  ]).isRequired,
  justify: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
};
