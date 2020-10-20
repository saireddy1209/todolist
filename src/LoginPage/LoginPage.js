import React, { Component } from "react";
import Register from "../Register/Register";


class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginRegisterScreenShow:false,
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);

  }

  logInClickHandler = () => {
    this.setState({
      loginRegisterScreenShow: !this.state.loginRegisterScreenShow,
    });
  };

 
  handleUserChange(evt) {
    this.setState({
      email: evt.target.value
    });
  }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value
    });
  }
  logIn = () => {
    return (
      <div className="input-field">
        <label>Email</label>
        <input
          type="text"
        
          value={this.state.email}
          onChange={this.handleUserChange}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
        
          value={this.state.password}
          onChange={this.handlePassChange}
        />
        <br />
        <button type="submit"  onClick={this.logInClickHandler}>Submit</button>
        {this.state.loginRegisterScreenShow && this.state.email==="saireddy1209@gmail.com" && this.state.password==="123"?<div><Register/></div>:""}
      </div>
    );
  };

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return <div className="Login">{this.logIn()}</div>;
  }
}

export default LoginPage;
