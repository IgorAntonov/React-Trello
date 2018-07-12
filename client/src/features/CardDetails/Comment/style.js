import styled from 'styled-components';
import TimeAgo from 'react-timeago';

import { P } from 'Src/ui';

export const IconContainer = styled.div`
  fill: #999;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 0.75rem;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

export const Header = styled.div`
  display: flex;
  align-items: baseline;

  margin-bottom: 0.5rem;
  cursor: default;
`;

export const AuthorName = styled.div`
  margin-right: 0.7rem;
  font-weight: 500;
  font-size: 0.9rem;
`;

export const Time = styled(TimeAgo)`
  font-size: 0.8rem;
  text-align: center;
  color: #999;
`;

export const CommentBody = styled(P)`
  min-width: 40%;
  padding: 0.5rem;
  border-radius: 4px;
  
  color: #000;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  font-weight: 300;
`;

