import React from 'react';

import { Wrapper, styledH1 as H1, styledP as P } from './style';
import { StyledLink as Link } from '../../shared';

export const GreetingMain = () => (
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
    <Link to="/signup" >Create Account</Link>
  </Wrapper>
);
