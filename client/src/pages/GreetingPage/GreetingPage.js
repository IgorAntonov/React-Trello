import React from 'react';
import PropTypes from 'prop-types';
import posed from 'react-pose';

import { AuthBlock } from 'Src/features/AuthBlock';
import {
  Footer,
  StyledLink as Link,
  Header,
  FlexPage,
  H1,
  P
} from 'Src/ui';
import { Main, Logo } from './style';

const PosedPage = posed(FlexPage)({
  init: { scaleY: 0.1 },
  mount: { scaleY: 1, transition: { type: 'tween', duration: 200 } }
});

export const GreetingPage = ({ isAuth, logoutUser }) => (
  <PosedPage initialPose="init" pose="mount" >
    <Header justify="space-between" bgColor="#f8f9f9" >
      <Logo to="/"> Reactive Trello </Logo>
      <AuthBlock isAuth={isAuth} logoutUser={logoutUser} />
    </Header>
    <Main>
      <H1 marginB="2rem" >
        Reactive Trello lets you work more collaboratively and get more done.
      </H1>
      <P marginB="2rem">
        Trello’s boards, lists, and cards enable you to organize
        and prioritize your projects in a fun, flexible and rewarding way.
      </P>

      {!isAuth &&
        <P>What are you waiting for? Sign up for free: </P>}

      {isAuth
        ? <Link bgcolor="#607D8B" to="/boards" >Boards</Link>
        : <Link bgcolor="#607D8B" to="/signup" >Create Account</Link>}
    </Main>
    <Footer />
  </PosedPage>
);

GreetingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  logoutUser: PropTypes.func.isRequired
};
