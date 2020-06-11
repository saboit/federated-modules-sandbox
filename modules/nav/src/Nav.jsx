import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background-color: #2a2a2a;
  padding: 0.5rem;
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
  fontWeight: 'bold',
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
