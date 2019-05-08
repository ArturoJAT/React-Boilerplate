import React, { Component } from "react";

export default class NavBar extends Component {

  render() {
    return (
        <ul>
            {this.props.children.map((child,index) => <li key={index}>{child}</li> )}
        </ul>
    );
  }
}
