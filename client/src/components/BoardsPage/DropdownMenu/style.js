import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuWrapper = styled.div`
  position: absolute;
  
  right: 0;
  top: 150%;

  > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`;

