import styled from 'styled-components';

import { media } from 'Src/helpers';

export const H2 = styled.h2`
  margin-bottom: 0.5rem;
  margin-top: 0;
  
  font-size: 1.2rem;
  font-weight: 400;

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
