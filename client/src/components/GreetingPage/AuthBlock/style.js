import styled from 'styled-components';
import PropTypes from 'prop-types';

import StyledLink from '../../shared/Buttons/StyledLink';


export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0.5rem;
`;

export const Link = styled(StyledLink)`

`;

Link.propTypes = {
  signup: PropTypes.string
};

