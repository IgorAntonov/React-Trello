import styled from 'styled-components';

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

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 16rem;
`;

