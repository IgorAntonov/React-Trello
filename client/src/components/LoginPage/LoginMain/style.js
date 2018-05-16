import styled from 'styled-components';

import { StyledLink } from '../../shared';

export const Wrapper = styled.main`
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
