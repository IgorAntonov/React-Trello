import styled from 'styled-components';

import { Icon, P } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const IconContainer = styled.div`
  fill: #999;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 0.75rem;
  padding-left: 0.5rem;
`;

export const CommentIcon = styled(Icon).attrs({
  icon: 'comment',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;

export const Header = styled(P)`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 500;
  cursor: default;
`;

export const UserName = styled(P)`
  color: #999;
  cursor: default;
`;

export const CommentInput = styled.textarea.attrs({
  placeholder: 'Write a comment...'
})`
  padding: 0.5rem;
  
  border: none;
  border-radius: 4px;
  resize: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

  transition: 0.2s all;
  :focus {
    cursor: text;
    box-shadow: ${p => `inset 1px 1px 2px ${p.theme.main}, inset -1px -1px 2px ${p.theme.main}`};
  }
`;
