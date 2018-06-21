import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  margin-right: 1rem;
 
  border-radius: 4px;
  overflow: hidden;

  background-color: #d6dadc;
  color: #333;
`;

export const TitleWrapper = styled.div`
  display: flex;

  padding: 0.5rem;
  padding-bottom: 0;
`;

export const Title = styled.textarea.attrs({
  maxLength: '20',
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
  color: #333;
  font-weight: 500;
  
  transition: 0.3s all;
  :focus {
    background-color: #fff;
    cursor: text;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

