import React from 'react';
import styled from 'styled-components';

import { Row, P } from 'Src/ui';
import { Icon } from '../Icon';

const IconBtn = styled.a`
  margin: 0.25rem;
  padding: 0.25rem;
  
  fill: #7b7a7a;
  transition: 0.2s fill;
  :hover {
    fill: #fafafa;
  }
`;

export const Footer = () => (
  <Row justify="space-between" align="center" padding="0.5rem" bgColor="#201e1c" >
    <P marginB="0" color="#7b7a7a">
      © 2018 Igor Antonov
    </P>
    <Row align="flex-end">
      <IconBtn href="https://github.com/IgorAntonov" >
        <Icon icon="github" width="24px" height="24px" viewBox="24" />
      </IconBtn>
      <IconBtn href="https://twitter.com/IgorAntonov18" >
        <Icon icon="twitter" width="24px" height="24px" viewBox="24" />
      </IconBtn>
      <IconBtn href="https://vk.com/id18941999" >
        <Icon icon="vk" width="24px" height="24px" viewBox="24" />
      </IconBtn>
    </Row>
  </Row>
);
