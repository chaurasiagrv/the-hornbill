import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Switch, Redirect, Route } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

import LogIn from "./views/login/login";
import Main from "./views/overview/main";
import "./App.css";

const App = () => {
  const [cookies] = useCookies(["token"]);

  return (
    <Switch>
      {cookies.accessToken?.length > 0 ? (
        <>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Redirect to="/login" />
        </>
      )}
      <Route exact path="/main">
        <Main />
      </Route>
    </Switch>
  );
};

export default App;
