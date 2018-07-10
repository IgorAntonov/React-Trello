import styled from 'styled-components';

import { media } from 'Src/helpers';
import { Button } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

`;

export const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 120%;
  
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${p => p.theme.darker};
`;

export const UserButton = styled(Button)`
  
`;
