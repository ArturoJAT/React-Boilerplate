import React, { Component } from "react";
import { connect } from 'react-redux';
import { logInAction } from '../actions';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: null,
      email: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.logIn = this.logIn.bind(this);
  }

  logIn(e){
    this.props.logInAction({email: this.state.email,password: this.state.password}, this.props.history);
  }

  handleInputChange(e) {
    if(e.target.type === "text"){
      this.setState({ email: e.target.value });
    }else{
      this.setState({ password: e.target.value });
    }
  }

  loadMetodo(method) {
    if (method === "google") {
      this.setState({ method: <button>G</button> });
    } else if (method === "usrpass") {
      this.setState({
        method: (
          <div>
            <input
              type="text"
            
              onChange={this.handleInputChange.bind(this)}
            />
            <span>email</span>
            <input
              type="password"
         
              onChange={this.handleInputChange.bind(this)}
            />
            <span>password</span>
            <button onClick={this.logIn.bind(this)}>Entrar</button>
          </div>
        )
      });
    }
  }
  errorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className="info-red">
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        Log In
        <button onClick={() => this.loadMetodo("google")}>Google</button>
        <button onClick={this.loadMetodo.bind(this, "usrpass")}>
          User Password
        </button>
        {this.state.method}
        {this.errorMessage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}


export default connect(mapStateToProps, {logInAction})(LogIn);
