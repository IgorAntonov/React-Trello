import React from 'react';

import { Wrapper, H1, P } from './style';
import Link from '../../shared/Buttons/StyledLink';

const GreetingMain = () => (
  <Wrapper>
    <H1>
      Reactive Trello lets you work more collaboratively and get more done.
    </H1>
    <P>
      Trello’s boards, lists, and cards enable you to organize
      and prioritize your projects in a fun, flexible and rewarding way.
    </P>
    <P>
      What are you waiting for? Sign up for free:
    </P>
    <Link to="/" >Create Account</Link>
  </Wrapper>
);


export default GreetingMain;
