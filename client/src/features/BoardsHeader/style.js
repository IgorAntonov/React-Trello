import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { media } from 'Src/helpers';
import { Button } from 'Src/ui';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem;

  background-color: ${p => p.theme.darker};
`;

export const FlexWrapper = styled.div`
  ${media.mobile`
    flex: 1;
  `}
  display: flex;
  align-items: center;
  justify-content: ${p => p.justify};

  position: relative;
`;

export const Title = styled(Link)`
  margin: 0;
  padding: 0 0.5rem;
  text-align: center;
  font-style: italic;
  font-weight: 500;
  color: #fff;

  font-size: 1.2rem;
  ${media.mobile`
    font-size: 1.3rem;
  `}
  ${media.tablet`
    font-size: 1.4rem;
    font-weight: 500;
  `}
  ${media.desktop`
    font-size: 1.5rem;
  `}
`;

export const MenuButton = styled(Button)`
  justify-content: center;
  margin: 0;
  border-radius: 0;
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

