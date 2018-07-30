import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from '../media-template';

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: ${({ marginB }) => marginB || '0.5rem'};

  color: ${({ color }) => color || '#fafafa'};
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  
  cursor: default;
  font-size: 1.4rem;
  font-weight: 400;
  user-select: none;

  ${media.mobile`
    font-size: 1.6rem;
  `}
  ${media.tablet`
    font-size: 1.8rem;
    font-weight: 500;
  `}
  ${media.desktop`
    font-size: 2rem;
  `}
`;

H1.propTypes = {
  marginB: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};
