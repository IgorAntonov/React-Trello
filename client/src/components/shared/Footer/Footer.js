import React from 'react';

import { FooterWrapper, P, Wrapper, A } from './style';
import { Icon } from '../Icons';


export const Footer = () => (
  <FooterWrapper>
    <P>© 2018 Igor Antonov</P>
    <Wrapper>
      <div>
        <A href="https://github.com/IgorAntonov" >
          <Icon icon="github" width="24px" height="24px" viewBox="24" />
        </A>
        <A href="https://twitter.com/IgorAntonov18" >
          <Icon icon="twitter" width="24px" height="24px" viewBox="24" />
        </A>
        <A href="https://vk.com/id18941999" >
          <Icon icon="vk" width="24px" height="24px" viewBox="24" />
        </A>
      </div>
    </Wrapper>
  </FooterWrapper>
);
