import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

export const Wrapper = styled.div`
  display: flex;
  min-width: 16rem;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  flex: 1;
  
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  
  background-color: rgba(0, 0, 0, 0.1);
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s all;
  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  :focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const NewCardField = styled(ClickOutside)`
  display: flex;
  flex-direction: column;
  flex: 1;
  
  border-radius: 4px;
  background-color: #d6dadc;
`;

export const Field = styled.textarea.attrs({
  placeholder: 'List title'
})`
  display: flex;
  flex:1;
  
  height: 4rem;
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
  cursor: pointer;
  transition: 0.3s all;
  fill: #999;
  :hover {
    fill: #1a1a1a;
  }
`;
