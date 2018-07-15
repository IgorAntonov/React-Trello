import styled from 'styled-components';
import posed from 'react-pose';
import ClickOutside from 'react-click-outside';

import { media } from 'Src/helpers';
import { Button } from 'Src/ui';

export const Wrapper = styled(ClickOutside)`
  display: none;

  ${media.tablet`
    display: flex;
    align-items: center;
  `}
`;

export const CreateButton = styled(Button)`
  display: flex;
  align-items: center;
 
  padding: 0.3rem;
  
  fill: #fff;
  :hover {
    opacity: 0.6;
  }
`;

export const CreateInput = styled.input.attrs({
  placeholder: 'Add board title'
})`
  width: 11rem;
  padding: 0 0.5rem;
  
  align-self: stretch;
  outline: none;
  border: none;
  border-radius: 4px;
`;

export const PosedCreateInput = posed(CreateInput)({
  init: { translateX: '100%', opacity: 0 },
  open: { translateX: 0, opacity: 1 }
});
