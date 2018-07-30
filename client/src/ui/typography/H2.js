import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from '../media-template';

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: ${({ marginB }) => marginB || '0.5rem'};
  
  color: ${({ color }) => color || '#fafafa'};
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  
  cursor: default;
  font-size: 1.2rem;
  font-weight: 400;
  user-select: none;

  ${media.mobile`
    font-size: 1.3rem;
  `}
  ${media.tablet`
    font-size: 1.4rem;
    font-weight: 500;
  `}
  ${media.desktop`
    font-size: 1.5rem;
  `}
`;

H2.propTypes = {
  marginB: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};
