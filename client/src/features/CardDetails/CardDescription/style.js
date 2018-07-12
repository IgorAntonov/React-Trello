import styled from 'styled-components';

import { P } from 'Src/ui';

export const IconContainer = styled.div`
  fill: #999;
`;

export const Header = styled(P)`
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const DescInput = styled.textarea.attrs({
  placeholder: 'Add a more detailed description...'
})`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;
  
  resize: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  cursor: pointer;
  color: #555;
  transition: 0.2s all;
  :focus {
    box-shadow: ${p => `inset 1px 1px 2px ${p.theme.main}, inset -1px -1px 2px ${p.theme.main}`};
    cursor: text;
    color: #000;
  }
`;
