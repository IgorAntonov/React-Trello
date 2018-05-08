import styled from 'styled-components';

import NormalH1 from '../../shared/Typography/H1';
import NormalP from '../../shared/Typography/P';
import media from '../../shared/mediaTemplate';

import bg from '../../assets/bg.jpg';

export const Wrapper = styled.div`
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

export const H1 = styled(NormalH1)`
  margin-bottom: 2rem;
`;

export const P = styled(NormalP)`
  margin-bottom: 2rem;
`;

