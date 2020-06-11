import React, { useEffect } from "react";

import Nav from "nav/Nav";
import App from "vue/App";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function Main() {
  useEffect(() => {
    console.log(App);
    console.log(App[`$options`].render());
  });
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
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
