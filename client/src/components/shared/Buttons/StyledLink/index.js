import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from '../commonStyles';

const StyledLink = styled(Link)`
  ${css}
`;

Link.propTypes = {
  to: PropTypes.string.isRequired
};

export default StyledLink;
