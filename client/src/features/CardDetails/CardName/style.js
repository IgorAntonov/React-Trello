import styled from 'styled-components';

import { Icon } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const IconContainer = styled.div`
  padding-top: 0.25rem;

  fill: #999;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  margin: 0 0.75rem;
`;

export const NameInput = styled.input`
  padding: 0.25rem 0.5rem;
  
  border: none;
  border-radius: 4px;
  background-color: transparent;
  outline: none;

  font-weight: 500;
  font-size: 1.3rem;
  cursor: pointer;
  
  transition: 0.2s all;
  :focus {
    cursor: text;
    box-shadow: ${p => `inset 1px 1px 2px ${p.theme.main}, inset -1px -1px 2px ${p.theme.main}`};
  }
`;

export const Span = styled.span`
  padding-left: 0.5rem;
  color: #999;
  cursor: default;
`;

export const TitleIcon = styled(Icon).attrs({
  icon: 'title',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;
