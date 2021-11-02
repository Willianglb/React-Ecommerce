import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.div`
  background-color: #1a1919;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NavLinks = styled.ul`
  width: 800px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0px;
  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 600;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: palevioletred;
    transition: all 0.5s ease;
  }
`;
