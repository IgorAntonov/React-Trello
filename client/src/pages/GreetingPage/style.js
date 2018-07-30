import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from 'Src/ui';
import bg from './assets/bg.jpg';

export const Logo = styled(Link)`
  display: block;
  padding: 0.25rem 0.5rem;

  color: #aeafaf;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  user-select: none;
  transition: 0.2s color;
  
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

  color: #fff;
  text-align: center;
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
