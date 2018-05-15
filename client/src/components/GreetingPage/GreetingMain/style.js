import styled from 'styled-components';

import { media, P, H1 } from '../../shared';

import bg from '../../assets/bg.jpg';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  flex: 1;
  padding: 2rem;
  text-align: center;
  color: #fff;
  background: url(${bg}) no-repeat;
  background-position: center;
  background-size: cover;

  ${media.mobile`
    padding: 2rem 5rem;`}
  ${media.tablet`
    padding: 2rem 10rem;`}
  ${media.desktop`
    padding: 2rem 15rem;`}
`;

export const styledH1 = styled(H1)`
  margin-bottom: 2rem;
`;

export const styledP = styled(P)`
  margin-bottom: 2rem;
`;

