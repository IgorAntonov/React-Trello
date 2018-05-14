import styled from 'styled-components';

import { media } from '../../helpers';

export const H1 = styled.h1`
  margin-bottom: 0.5rem;
  margin-top: 0;
  
  font-size: 1.4rem;
  font-weight: 400;

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

