import React from "react";

import Nav from "nav/Nav";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function Main() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/">
          <div>Home</div>
        </Route>
        <Route path="/about">
          <div>About</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
