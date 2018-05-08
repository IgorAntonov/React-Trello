import React from 'react';

import Icon from '../../shared/Icons';
import { Wrapper, A } from './style';


const SocialBlock = () => (
  <Wrapper>
    <div>
      <A href="https://github.com/IgorAntonov" >
        <Icon icon="github" width="24px" height="24px" />
      </A>
      <A href="https://twitter.com/IgorAntonov18" >
        <Icon icon="twitter" width="24px" height="24px" />
      </A>
      <A href="https://vk.com/id18941999" >
        <Icon icon="vk" width="24px" height="24px" />
      </A>
    </div>
  </Wrapper>
);

export default SocialBlock;
