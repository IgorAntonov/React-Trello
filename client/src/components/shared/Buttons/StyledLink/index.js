import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { styles } from '../commonStyles';

export const StyledLink = styled(Link)`
  ${styles}
`;

Link.propTypes = {
  to: PropTypes.string.isRequired
};
