import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import { Col } from './styled-layout';

export const FlexPage = ({ children, ...props }) => (
  <Col width="100%" minHeight="100vh" {...props}>
    {children}
  </Col>
);

export const PosedPage = posed(FlexPage)({
  left: { x: '-100%' },
  right: { x: '100%' },
  mount: { x: 0, transition: { type: 'tween' } }
});

FlexPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};
