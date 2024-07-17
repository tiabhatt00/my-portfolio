import styled from 'styled-components';
import { Link } from 'react-scroll';

export const LayoutContainer = styled.div`
  scroll-behavior: smooth;
`;

export const Navbar = styled.nav`
  font-family: 'Nunito Sans', sans-serif;
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  color: #6677CC;
  display: flex;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  transition: opacity 0.5s ease-in-out;
`;

export const NavItem = styled(Link)`
  margin: 0 15px;
  cursor: pointer;
  color: #6677CC;
  text-decoration: none;
  &:hover {
    background-color: #DADAE6;
    padding: 5px;
    border-radius: 5px;
  }
`;
