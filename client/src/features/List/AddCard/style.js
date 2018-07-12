import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

export const AddButton = styled.button`
  display: flex;
  flex: 1;
  padding: 0.5rem;
  min-height: 34px;
  border: none;
  border-radius: 4px;
  outline: none;

  color: #8c8c8c;
  font-weight: 500;
  background-color: transparent;
  cursor: pointer;
  transition: 0.3s all;
  :hover,
  :focus {
    background-color: #c8ced0;
  }
`;

export const NewCardField = styled(ClickOutside)`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 130px;
`;

export const Field = styled.textarea`
  display: flex;
  flex:1;
  
  min-height: 4rem;
  padding: 0.3rem;
  margin: 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;

  resize: none;
  word-wrap: break-word;
`;

export const CancelButton = styled.button`
  display: flex;
  
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  
  background-color: transparent;
  fill: #999;
  cursor: pointer;
  transition: 0.3s all;
  :hover {
    fill: #1a1a1a;
  }
`;

