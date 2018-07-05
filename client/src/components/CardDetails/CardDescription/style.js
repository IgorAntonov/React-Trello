import styled from 'styled-components';

import { Icon, P } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  
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
  icon: 'list',
  width: '26px',
  height: '26px',
  viewBox: '48'
})``;

export const Header = styled(P)`
  font-size: 1.3rem;
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
  cursor: pointer;

  transition: 0.2s all;
  :focus {
    cursor: text;
    box-shadow: ${p => `inset 1px 1px 2px ${p.theme.main}, inset -1px -1px 2px ${p.theme.main}`};
  }
`;
