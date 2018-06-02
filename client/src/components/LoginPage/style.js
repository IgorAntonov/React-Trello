import styled from 'styled-components';

import { H1 as defaultH1, StyledLink } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;

  background-color: #f8f9f9;
`;

export const H1 = styled(defaultH1)`
  color: #333;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex: 1;

  padding: 2rem;

  background-color: #eceff1;
`;

export const Link = styled(StyledLink)`
  background-color: #eceff1;
  color: #2e7d32;
`;
