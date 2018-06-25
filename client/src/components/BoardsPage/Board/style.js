import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0.5rem 1rem;

  background-color: ${p => p.theme.main};
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

`;

export const FlexBoard = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;

  overflow-x: auto;
  

  ::-webkit-scrollbar {
    height: 0.8rem;
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

