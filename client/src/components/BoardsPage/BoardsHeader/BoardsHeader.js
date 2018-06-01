import React from 'react';

import { Button } from 'Shared';
import { Wrapper, FlexWrapper, Title } from './style';

export const BoardsHeader = () => (
  <Wrapper>
    <FlexWrapper>
      <Button>Boards</Button>
      <Title>Boards Name</Title>
    </FlexWrapper>
    <Title>Reactive Trello</Title>
    <FlexWrapper>
      <Button>Create</Button>
      <Button>Profile</Button>
    </FlexWrapper>
  </Wrapper>
);
