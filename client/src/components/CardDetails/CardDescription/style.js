import styled from 'styled-components';

import { Icon, P } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
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

export const DescIcon = styled(Icon).attrs({
  icon: 'description',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;

export const Header = styled(P)`
  font-size: 1.1rem;
  font-weight: 500;
  cursor: default;
`;

export const DescInput = styled.textarea.attrs({
  placeholder: 'Add a more detailed description...'
})`
  padding: 0.5rem;
  
  border: none;
  border-radius: 4px;
  resize: none;
  outline: none;
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
