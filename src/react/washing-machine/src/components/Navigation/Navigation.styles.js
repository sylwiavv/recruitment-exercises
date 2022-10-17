import styled from 'styled-components'
import {NavLink} from "react-router-dom";

export const Navbar = styled.nav`
  margin-bottom: 32px;
  border: 1px solid;
  border-radius: 4px;
  padding: 16px;
`

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({theme}) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  
  &:hover {
    text-decoration: none;
    color: ${({theme}) => theme.colors.lightGreen};
  }

  &.active {
    color: ${({theme}) => theme.colors.lightGreen};
    &:after {
      opacity: 1;
    }
  }

  &:after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    height: 4px;
    width: 100%;
    right: 0;
    bottom: -8px;
    transform: translateY(-50%);
    background-color: ${({theme}) => theme.colors.lightGreen};
  }
`;