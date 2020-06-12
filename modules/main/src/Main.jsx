import React from "react";
import VueContainer from "./VueContainer";
import Nav from "nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  margin-top: 48px;
  padding: 0.5rem;
`;

function Main() {
  return (
    <BrowserRouter>
      <Nav />
      <StyledMain>
        <Switch>
          <Route exact path="/">
            <div>Home</div>
          </Route>
          <Route path="/vue">
            <VueContainer />
          </Route>
        </Switch>
      </StyledMain>
    </BrowserRouter>
  );
}

export default Main;
