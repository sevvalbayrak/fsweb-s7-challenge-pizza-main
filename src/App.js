import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home Component/Home";
import Orders from "./components/Orders Component/Orders";
import Success from "./components/Success Component/Success";
import "./App.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Success />
      </Route>
      {/* <Route path="/success">
    </Route>
    <Route path="/:user">
    </Route>
    <Route>
    </Route> */}
    </Switch>
  );
};
export default App;
