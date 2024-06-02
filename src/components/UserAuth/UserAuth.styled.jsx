import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.div``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #c963e8;
  font-size: 25px;

  &:hover {
    color: #f08000;
  }
`;
