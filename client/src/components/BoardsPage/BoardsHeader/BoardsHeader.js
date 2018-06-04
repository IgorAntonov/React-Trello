import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'Components/shared';
import { Wrapper, FlexWrapper, Title } from './style';

export const BoardsHeader = ({ logout }) => (
  <Wrapper>
    <FlexWrapper>
      <Button>Boards</Button>
      <Title>Boards Name</Title>
    </FlexWrapper>
    <Title>Reactive Trello</Title>
    <FlexWrapper>
      <Button>Create</Button>
      <Button>Profile</Button>
      <Button onClick={logout} >Logout</Button>
    </FlexWrapper>
  </Wrapper>
);

BoardsHeader.propTypes = {
  logout: PropTypes.func.isRequired
};

