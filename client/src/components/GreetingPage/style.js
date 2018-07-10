import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { P as DefaultP, H1 as DefaultH1 } from 'Components/shared';
import { media } from 'Src/helpers';

import bg from 'Src/assets/bg.jpg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0;

  background-color: #f8f9f9;
`;

export const Logo = styled(Link)`
  display: block;
  padding: 0.25rem 0.5rem;

  font-size: 1rem;
  font-weight: 500;
  color: #aeafaf;
  transition: 0.2s color;
  text-decoration: none;
  
  ${media.mobile`
    font-size: 1.2rem;
  `}
  ${media.tablet`
    font-size: 1.8rem;
  `}
  ${media.desktop`
    font-size: 2rem;
  `}

  :hover {
    color: #7c7d7d;
  }
`;

export const Main = styled.main`
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

export const H1 = styled(DefaultH1)`
  margin-bottom: 2rem;
`;

export const P = styled(DefaultP)`
  margin-bottom: 2rem;
`;
