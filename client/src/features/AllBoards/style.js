import styled from 'styled-components';

import { H2 } from 'Src/ui';

export const Flex = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  fill: #fff;
`;

export const Title = styled(H2)`
  margin: 0;
  padding: 0 0.5rem;

  color: #fff;
`;

export const FlexBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  padding: 0.5rem;   
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 14px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 14px;
    background-color: ${p => p.theme.button};
  }
  ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.darker};
    border-radius: 14px;
  }
`;

