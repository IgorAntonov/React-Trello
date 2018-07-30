import styled from 'styled-components';
import posed from 'react-pose';
import { Link } from 'react-router-dom';

import { Row, Button, media } from 'Src/ui';

const Flex = styled(Row)`
  position: relative;
  
  align-items: center;
  ${media.mobile`
    flex: 1;
  `}
`;
export const PosedFlex = posed(Flex)({
  right: { translateX: '-100%' },
  left: { translateX: '100%' },
  mount: { translateX: 0 }
});

export const Title = styled(Link)`
  margin: 0;
  padding: 0 0.5rem;

  color: #fff;
  text-align: center;
  font-style: italic;
  font-weight: 500;
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
  :active {
    transform: none;
  }
`;

