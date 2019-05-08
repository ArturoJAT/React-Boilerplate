import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom";
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }

  render() {
    let { component: Component, ...rest } = this.props;
    return (
        <Route
        {...rest}
        render={props =>
          this.props.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: this.props.location }
              }}
            />
          )
        }
      />
    )
  }
}

function mapStateToProps(state) {
    return {auth: state.auth.authenticated}
}
export default connect(mapStateToProps, {})(PrivateRoute);
