import React, { Component } from 'react'
import { Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
import Contenedor1 from '../containers/Contenedor1';
import Contenedor2 from '../containers/Contenedor2';

export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <Link to="/">Contenedor 1</Link>
          <Link to="Contenedor2">Contenedor 2</Link>
        </NavBar>
        <Route path="/" exact component={Contenedor1} />
        <Route path="/Contenedor2" exact component={Contenedor2} />
      </div>
    )
  }
}
