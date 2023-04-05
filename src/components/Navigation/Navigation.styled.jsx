import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
