import React from "react";
import { useCookies } from "react-cookie";
import { BrowserRouter as Switch, Redirect, Route } from "react-router-dom";

import Setting from "./views/setting/setting";
import Main from "./views/overview/main";
import LogIn from "./views/login/login";
import "remixicon/fonts/remixicon.css";
import "./App.css";

const App = () => {
  const [cookies] = useCookies(["token"]);

  return (
    <Switch>
      <Route exact path="/main" component={Main} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/setting" component={Setting} />

      {cookies.accessToken?.length > 0 ? (
        <>
          <Route exact path="/main" component={Main} />
          <Route exact path="/" component={Main} />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route exact path="/login" component={LogIn} />
          <Redirect to="/login" />
        </>
      )}
    </Switch>
  );
};

export default App;
