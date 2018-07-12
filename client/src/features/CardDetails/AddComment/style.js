import styled from 'styled-components';

import { P } from 'Src/ui';

export const IconContainer = styled.div`
  fill: #999;
`;

export const Header = styled(P)`
  margin: 0;
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const UserName = styled(P)`
  color: #999;
  font-size: 0.9rem;
`;

export const CommentInput = styled.textarea.attrs({
  placeholder: 'Write a comment...'
})`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;

  resize: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: 0.2s all;
  :focus {
    cursor: text;
    box-shadow: ${p => `inset 1px 1px 2px ${p.theme.main}, inset -1px -1px 2px ${p.theme.main}`};
  }
`;
