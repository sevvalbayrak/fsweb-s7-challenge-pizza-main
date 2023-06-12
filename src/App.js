import React from "react";
import { Route, Switch } from "react-router";
import Home from "./components/Home Component/Home"
import Orders from "./components/Orders Component/Orders"
import './App.css'

const App = () => {
  return (
    <Switch>
    <Route exact path="/">
      <Orders />
    </Route>
    {/* <Route path="/about">
    </Route>
    <Route path="/:user">
    </Route>
    <Route>
    </Route> */}
  </Switch>
    
  );
};
export default App;
