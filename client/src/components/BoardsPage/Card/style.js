import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 34px;
  margin: 0.5rem;
  margin-top: 0;
  
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24);
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;

  background-color: #fff;
  cursor: pointer;
  
  transition: 0.2s all;
  :hover {
    background-color: #edeff0;
  }
`;

