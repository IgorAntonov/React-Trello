import styled from 'styled-components';
import posed from 'react-pose';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 16rem;
  max-height: 500px;
  margin-right: 1rem;
  border-radius: 4px;

  background-color: #e2e4e6;
  color: #333;
`;

export const Posed = posed(Wrapper)({
  init: { scaleY: 0 },
  open: { scaleY: 1 }
});

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0.5rem;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #c4c9cc;
  }
  ::-webkit-scrollbar-track {
    background-color: #d6dadc;
    border-radius: 4px;
  }
`;

