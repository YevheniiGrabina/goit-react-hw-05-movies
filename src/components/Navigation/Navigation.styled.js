import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    display: inline-block;
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  color: #45b5e5;

  &.active {
  color: orange;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
   text-decoration: none;
`;

