import styled from 'styled-components';

import { media } from '../../helpers';

export const P = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;

  font-size: 0.8rem;
  font-weight: 400;

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
