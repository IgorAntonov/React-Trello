import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
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

export const GreetingPage = ({ isAuth, loginUser }) => (
  <Fragment>
    {isAuth && <Redirect to="/boards" />}

    <PosedPage initialPose="init" pose="mount" >
      <Header justify="space-between" bgColor="#f8f9f9" >
        <Logo to="/"> Reactive Trello </Logo>
        <AuthBlock
          isAuth={isAuth}
          loginUser={loginUser}
        />
      </Header>
      <Main>
        <H1 marginB="2rem" >
          Reactive Trello lets you work more collaboratively and get more done.
        </H1>
        <P marginB="2rem">
          Trello’s boards, lists, and cards enable you to organize
          and prioritize your projects in a fun, flexible and rewarding way.
        </P>
        <Link bgcolor="#607D8B" to="/signup" >
          Create Account
        </Link>
      </Main>
      <Footer />
    </PosedPage>
  </Fragment>
);

GreetingPage.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  loginUser: PropTypes.func.isRequired
};
