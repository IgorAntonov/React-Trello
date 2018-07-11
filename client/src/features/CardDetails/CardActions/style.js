import styled from 'styled-components';

import { Icon } from 'Src/ui';

export const Wrapper = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const IconWrapper = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  margin-bottom: 0.7rem;

  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  fill: #999;

  transition: 0.3s all;
  :hover {
    fill: #1a1a1a;
  }
`;
export const CloseIcon = styled(Icon).attrs({
  icon: 'close',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;

export const DeleteIcon = styled(Icon).attrs({
  icon: 'delete',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;

export const DeleteBtn = styled.button`
  padding: 0.2rem 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: ${p => p.theme.button};
  color: #fff;
  cursor: pointer;
  
  transition: 0.2s all;
  :hover {
    background-color: #00A86B;
  }
`;
