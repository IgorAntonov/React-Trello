import React from 'react';
import PropTypes from 'prop-types';

import { Col } from './styled-layout';

export const FlexPage = ({ children, ...props }) => (
  <Col width="100%" minHeight="100vh" {...props}>
    {children}
  </Col>
);

FlexPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};
