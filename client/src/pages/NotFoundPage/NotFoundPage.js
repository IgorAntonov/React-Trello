import React from 'react';
import posed from 'react-pose';
import {
  Col,
  FlexPage,
  H1,
  H2,
  Footer,
  StyledLink
} from 'Src/ui';

const PosedH1 = posed(H1)({
  init: { x: '-300%' },
  mount: { x: 0, transition: { type: 'spring', delay: 100 } }
});
const PosedH2 = posed(H2)({
  init: { x: '100%' },
  mount: { x: 0, transition: { type: 'spring', delay: 100 } }
});

export const NotFoundPage = () => (
  <FlexPage>
    <Col grow={1} justify="center" align="center" bgColor="#89609e" >
      <PosedH1 initialPose="init" pose="mount">404</PosedH1>
      <PosedH2 initialPose="init" pose="mount" marginB="2rem" >Page not found :(</PosedH2>
      <StyledLink to="/" bgcolor="#755286" >Take me back to the main page</StyledLink>
    </Col>
    <Footer />
  </FlexPage>
);
