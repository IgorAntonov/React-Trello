import styled from 'styled-components';

import { P as defaultP } from '../Typography';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 1rem;

  background-color: #201e1c;
`;

export const P = styled(defaultP)`
  margin: 0;
  font-weight: 400;
  color: #7b7a7a;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const A = styled.a`
  margin: 0.25rem;
  padding: 0.25rem;
  
  fill: #7b7a7a;
  transition: 0.2s all;
  :hover {
    fill: #fafafa;
  }
`;
