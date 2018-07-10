import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

import { media } from 'Src/helpers';

export const Wrapper = styled(ClickOutside)`
  flex-basis: 98%;
  ${media.mobile`
    flex-basis: 48%;
  `}
  ${media.tablet`
    flex-basis: 31%;
  `}
  ${media.desktop`
    flex-basis: 23%;
  `}
  
  margin-bottom: 1rem;
  margin-right: 1%;
  margin-left: 1%;

  
  border: none;
  border-radius: 4px;
  overflow: hidden;
  background-color: rgba(222, 225, 227, 0.2);
  text-align: center;
  
  transition: 0.2s all;
  :focus {
    outline: none;
    background-color: rgba(222, 225, 227, 0.4);
  }
  :hover {
    background-color: rgba(222, 225, 227, 0.3);
  }
`;

export const AddButton = styled.button`
  width: 100%;
  padding: 1rem;

  border: none;
  outline: none;
  
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: transparent;
  color: #eaecef;
  cursor: pointer;
`;

export const BoardInput = styled.input.attrs({
  placeholder: 'Add board title'
})`
  width: 100%;
  padding: 1rem;
  
  color: #4c4e50;
  border: none;
  outline: none;
`;

