import styled from 'styled-components';

export const RenameInput = styled.textarea.attrs({
  maxLength: '80',
  rows: '1'
})`
  padding: 0.3rem;
  width: 100%;
  overflow: hidden;

  resize: none;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  
  transition: 0.3s all;
  :focus {
    background-color: #fff;
    color: #333;
    cursor: text;
  }
`;
