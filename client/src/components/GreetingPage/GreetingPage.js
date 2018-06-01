import React from 'react';

import { Footer, StyledLink as Link } from 'Shared';
import { AuthBlock } from './AuthBlock';
import { Wrapper, Main, H1, P, Logo, Header } from './style';

export const GreetingPage = () => (
  <Wrapper>
    <Header>
      <Logo to="/">
        Reactive Trello
      </Logo>
      <AuthBlock />
    </Header>

    <Main>
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
    </Main>

    <Footer />
  </Wrapper>
);
