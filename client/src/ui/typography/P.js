import styled from 'styled-components';
import PropTypes from 'prop-types';

import { media } from 'Src/helpers';

export const P = styled.p`
  margin-top: 0;
  margin-bottom: ${({ marginB }) => marginB || '0.5rem'};
  
  color: ${({ color }) => color || '#fafafa'};
  background-color: ${({ bgcolor }) => bgcolor || 'transparent'};
  
  cursor: default;
  font-size: 0.8rem;
  font-weight: 400;
  user-select: none;

  ${media.mobile`
    font-size: 0.8rem;
  `}
  ${media.tablet`
    font-size: 0.9rem;
  `}
  ${media.desktop`
    font-size: 1rem;
  `}
`;
P.propTypes = {
  marginB: PropTypes.string,
  color: PropTypes.string,
  bgcolor: PropTypes.string
};
