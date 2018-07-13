import React from 'react';

import {
  Col,
  FlexPage,
  H1,
  H2,
  Footer,
  StyledLink
} from 'Src/ui';

export const NotFoundPage = () => (
  <FlexPage>
    <Col grow={1} justify="center" align="center" bgColor="#89609e" >
      <H1>404</H1>
      <H2 marginB="2rem" >Page not found :(</H2>
      <StyledLink to="/" bgcolor="#755286" >Take me back to the main page</StyledLink>
    </Col>
    <Footer />
  </FlexPage>
);
