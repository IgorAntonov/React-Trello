import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ClickOutside from 'react-click-outside';

import { media } from 'Src/ui';

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
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
  border-radius: 4px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: rgba(222, 225, 227, 0.7);
  cursor: pointer;

  transition: 0.2s all;
  :focus {
    outline: none;
    background-color: rgba(222, 225, 227, 0.9);
  }
  :hover {
    background-color: rgba(222, 225, 227, 0.9);
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  padding: 1rem;
  outline: none;

  border: none;
  border-radius: 4px;
  background-color: transparent;
  color: #4c4e50;
  user-select: none;
`;

export const DeleteBtn = styled.button`
  position: absolute;
  top: 10%;
  right:0;
  
  padding: 0;
  border: none;
  outline: none;
  
  background-color: transparent;
  cursor: pointer;
  fill: ${p => p.theme.button};
  opacity: 0.7;
  transition: 0.2s all;

  :hover {
    transform: rotate(10deg);
    opacity: 1;
  }
  :focus {
    opacity: 1;
  }
  :active {
    transform: scale(1.1);
  }
`;

export const DeleteConfirm = styled(ClickOutside)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  padding: 0 1rem;
  border: none;
  outline: none;
  overflow: hidden;

  color: ${p => (p.isConfirm ? 'green' : 'inherit')};
  background-color: #fafafa;
  cursor: pointer;
  text-align: start;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.3s color;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 25%;
  right: 3%;

  height: 1.5rem;
  
  transition: 0.3s fill;
  fill: ${p => (p.isConfirm ? 'green' : 'red')}
`;
