import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

import { Icon } from 'Src/ui';

export const TitleWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  min-height: 44px;
  padding: 0.5rem;
`;

export const Title = styled.textarea.attrs({
  maxLength: '20',
  rows: '1'
})`
  padding: 0.3rem;
  width: 100%;
  overflow: hidden;
  border: none;
  border-radius: 4px;
  outline: none;

  color: #333;
  font-weight: 500;
  background-color: transparent;
  resize: none;
  cursor: pointer;
  transition: 0.3s all;
  :focus {
    background-color: #fff;
    cursor: text;
  }
`;

export const DeleteButton = styled.button`
  height: 24px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  
  background-color: transparent;
  cursor: pointer;
  fill: #8c8c8c;
  transition: 0.3s all;
  :hover,
  :focus {
    fill:#555;
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
  padding: 0.5rem;
  overflow: hidden;
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  outline: none;
  overflow: hidden;

  background-color: ${p => p.theme.button};
  color: #fff;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: 0.2s all;
  :hover {
    background-color: #00A86B;
  }
`;
