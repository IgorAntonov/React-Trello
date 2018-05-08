import styled from 'styled-components';

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
