import styled from 'styled-components';

import {
  H1 as DefaultH1,
  H1 as DefaultH2,
  StyledLink
} from 'Components/shared';

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

  background-color: ${p => p.theme.darker};
`;

export const H1 = styled(DefaultH1)`
  color: #fafafa;
  cursor: default;
`;
export const H2 = styled(DefaultH2)`
  color: #fafafa;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  flex: 1;

  padding: 2rem;

  background-color: ${p => p.theme.main};
  cursor: default;
`;

export const Link = styled(StyledLink)`
  margin-bottom: 1rem;

  background-color: transparent;
  color: #fafafa;
`;
