import styled from 'styled-components';

import { Icon } from 'Src/ui';

export const Wrapper = styled.div`
  display: flex;
  min-height: 34px;
  
  cursor: default;
`;

export const CardButton = styled.button`
  position: relative;

  width: 100%;
  padding: 0.5rem;
  margin: 0.8rem;
  margin-top: 0;
  border: none;
  border-radius: 4px;

  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.24);
  cursor: pointer;
  transition: 0.2s all;
  ${p => p.isDragging && 'transform: rotate(1deg) scale(1.05);'}
  :hover {
    background-color: #edeff0;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  right: 1%;
  bottom: 1%;

  display: flex;
`;

export const DescWrapper = styled.div`  
  fill: #999;
`;
export const DescIcon = styled(Icon).attrs({
  icon: 'description',
  width: '16px',
  height: '16px'
})``;

export const CommentWrapper = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding-left: 0.2rem;
  
  color: #999;
  font-size: 0.8rem;
  fill: #999;
`;
export const CommentCount = styled.div`
  padding-left: 0.1rem;
`;

export const CommentIcon = styled(Icon).attrs({
  icon: 'comment',
  width: '16px',
  height: '16px'
})``;
