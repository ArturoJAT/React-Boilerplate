import React, { Component } from "react";
import {Route,Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LogIn from "../views/LogIn";
import Home from "../views/Home";

export default class Routes extends Component {

  render() {
    return (
        <div>
          <Switch>
            <Route path="/login" component={LogIn} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </div>
    );
  }
}
