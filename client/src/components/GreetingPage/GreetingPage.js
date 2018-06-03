import React from 'react';
import PropTypes from 'prop-types';

import { Footer, StyledLink as Link } from 'Components/shared';
import { AuthBlock } from './AuthBlock';
import { Wrapper, Main, H1, P, Logo, Header } from './style';

export const GreetingPage = ({ isAuth }) => (
  <Wrapper>
    <Header>
      <Logo to="/">
        Reactive Trello
      </Logo>
      <AuthBlock isAuth={isAuth} />
    </Header>

    <Main>
      <H1>
        Reactive Trello lets you work more collaboratively and get more done.
      </H1>
      <P>
        Trello’s boards, lists, and cards enable you to organize
        and prioritize your projects in a fun, flexible and rewarding way.
      </P>
      {!isAuth &&
      <P>
        What are you waiting for? Sign up for free:
      </P>}
      {isAuth
        ? <Link to="/boards" >Boards</Link>
        : <Link to="/signup" >Create Account</Link>
      }
    </Main>

    <Footer />
  </Wrapper>
);

GreetingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired
};
