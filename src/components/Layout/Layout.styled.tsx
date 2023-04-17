import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
`;
export const StyledLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  font-size: 28px;
  text-decoration: none;
  color: black;
  &.active {
    background-color: lightgray;
    color: rgb(86, 9, 100);
  }
  :hover:not(.active) {
    color: aqua;
  }
`;
