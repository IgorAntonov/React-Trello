import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

export const Wrapper = styled.div`
  display: flex;

  width: 16rem;
`;

export const AddButton = styled.button`
  display: flex;
  flex: 1;
  justify-content: center;
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

  resize: none;
  border: none;
  border-radius: 4px;
  word-wrap: break-word;

  :focus {
    outline: none;
  }
`;

export const FieldActions = styled.div`
  display: flex;
  padding: 0.5rem 0;
`;

export const CancelButton = styled.button`
  display: flex;
  
  padding: 0;
  margin: 0;
  
  border: none;
  background-color: transparent;
  fill: #999;
  cursor: pointer;
  outline: none;
  transition: 0.3s all;
  :hover {
    fill: #1a1a1a;
  }
`;
