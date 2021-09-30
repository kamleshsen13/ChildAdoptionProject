
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Navbar from './Navbar'

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = this.initialState;
    this.state = {
      email: "",
      password: "",
      emailerror: "",
      passworderror: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  initialState={
    email:'', password:''
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { email, password } = this.state;

    if (email === "admin123@gmail.com" && password === "admin") {
      this.setState({
        loggedIn: true,
      });
      alert("logged in successfully");
    }

    if (email != "admin123@gmail.com" && password != "admin") {
      this.setState({
        loggedIn: false,
      });
      alert("Enter Valid email-id & password");
    }
  }

  resetLoginForm = () => {
    this.setState(() => this.initialState);
  };
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/AdminLogin/Admin" />;
    }
    return (
      <div id='adminlogin'>
        <Navbar/>
        <div
          className="container-md mt-5"
          style={{ backgroundColor: "gray", width: "700px", height: "400px" }}
        >
          <br />
          <center>
            {" "}
            <h1 style={{ color: "darkgreen" }}>
              <u>Admin Login</u>
            </h1>
            <br />
            <div className="col-6">
              <form onSubmit={this.submitForm}>
                <label >  Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email id"
                  value={this.state.email}
                  onChange={this.onChange}
                  required minLength="5" maxLength="20"
                />
                <p style={{ color: "red" }}>{this.state.emailerror}</p>
             
                <br />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.onChange}
                  
                  required minLength="5" maxLength="15"
                />
                <p style={{ color: "red" }}>{this.state.passworderror}</p>
                
                <br />
                <br />
                <br />
                <button
                  className="btn btn-warning col-5"
                  disabled={
                    this.state.email.length === 0 ||
                    this.state.password.length === 0
                  }
                  type="submit"   >
            
                  Login
                </button>
                &emsp;
                <button
                  className="btn btn-primary col-5"
                  disabled={
                    this.state.email.length === 0 &&
                    this.state.password.length === 0
                  }
                  type="reset"
                  onClick={this.resetLoginForm}
               >
               
                  Reset
                </button>
              </form>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
