import styled from 'styled-components';

export const IconContainer = styled.div`
  padding-top: 0.25rem;
  fill: #999;
`;

export const NameInput = styled.input`
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 4px;
  outline: none;

  background-color: transparent;
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
