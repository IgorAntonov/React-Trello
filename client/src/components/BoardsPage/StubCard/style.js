import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 34px;
  
  cursor: default;
`;

export const CardButton = styled.div`
  position: relative;

  width: 100%;
  padding: 0.5rem;
  margin: 0.8rem;
  margin-top: 0;

  border-radius: 4px;

  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24);
  cursor: pointer;
  text-align: center;
  
  transition: 0.2s all;
  :hover {
    background-color: #edeff0;
  }
`;
