import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #2a2a2a;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 25px;
  padding: 10px;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  && {
    margin-right: 1rem;
    text-decoration: none;
    color: #e6e6fa;
    &:hover {
      color: #ffffff;
    }
  }
`;

const activeStyle = {
  fontWeight: "bold",
};

function Nav() {
  return (
    <StyledNav>
      <StyledLink strict exact activeStyle={activeStyle} to="/">
        React
      </StyledLink>
      <StyledLink activeStyle={activeStyle} to="/vue">
        Vue
      </StyledLink>
    </StyledNav>
  );
}

export default Nav;
