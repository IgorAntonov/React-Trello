import styled from 'styled-components';

import NormalP from '../../shared/Typography/P';

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 1rem;

  background-color: #201e1c;
`;

export const P = NormalP.extend`
  margin: 0;
  font-weight: 400;
  color: #7b7a7a;
`;
