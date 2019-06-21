import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Unlocked from "./components/Unlocked";
import Login from "./components/Login";
import Friends from "./components/Friends";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Route path="/login" render={props => <Login {...props} />} /> //
      component={Login} />
      <PrivateRoute exact path="/" component={Unlocked} />
      <PrivateRoute path="/fishfriends" component={Friends} />
    </div>
  );
}

export default App;
