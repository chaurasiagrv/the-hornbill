import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import LogIn from "./views/login/login";
import Main from "./views/overview/main";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LogIn />
      </Route>
      <Route exact path="/main">
        <Main />
      </Route>
    </Switch>
  );
};

export default App;
