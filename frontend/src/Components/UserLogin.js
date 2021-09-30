import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

class UserLogin extends Component  {
  constructor() {
    super();

    this.state = {
      Email: "",
      Password: "",
      dbCredentEmail: [],
      dbCredentPassword: [],
      toDashboard:false
    };
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUserLogin = this.handleUserLogin.bind(this);
  }

  handleEmail(event)  {
    this.setState({ Email: event.target.value });
   
    
  }

  

  handlePassword(event) {
    this.setState({ Password: event.target.value });
    console.log(this.state.Password);
  }

  async componentDidMount() {
    let result;
    await fetch("http://localhost:8080/api/v1/users")
      .then((response) => response.json())
      .then((data) => (result = data))
      .then(() => console.log(result));
    console.log(result);
    let dbEmailID = result.map(function (element) {
      return `${element.email}`;
    });
    let dbPass = result.map(function (element) {
      return `${element.password}`;
    });

    this.setState({
      dbCredentEmail: dbEmailID,
      dbCredentPassword: dbPass,
    });
    console.log(this.state.dbCredentEmail, this.state.dbCredentPassword);
  }

  handleUserLogin = (event) => {
    debugger
    let indexPosition;
    debugger;
    if (this.state.dbCredentEmail.includes(this.state.Email)) {
      console.log("Entered email id is present");
      indexPosition = this.state.dbCredentEmail.indexOf(this.state.Email);
      console.log(indexPosition);
      if (this.state.Password == this.state.dbCredentPassword[indexPosition]){
        console.log("Login Success");
        localStorage.setItem("UserEmailID", this.state.Email)
        this.setState({
          toDashboard :true
        })
      } else {
        alert("Your password is wrong...Please try again!!!")
      }        
    } else {
      alert("The entered email ID is not present...Please register first!!! ")
    }
  };


  render() {
    if (this.state.toDashboard) {
      return <Redirect to='/UserPage' />
    }
    return (
      
      <div id='userlogin_div'>
        
        <div id='userlogin_div2'>
          <br />

          <center>
            <u>
              <h1 style={{ color: "darkgreen" }}>User Login</h1>
            </u>
            <br />
            <div className="col-10">
              <form>
                <center>
                  {" "}
                  <label></label>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email id"
                      onChange={this.handleEmail}
                    />{" "}
                  </div>
                </center>
                <br />
                <center>
                  <label></label>
                  <div className="col-12">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      onChange={this.handlePassword}
                      required
                      minLength="5"
                      maxLength="20"
                    />
                  </div>
                </center>
                <br />
                <br />

                <center>
                  <button
                    className="btn btn-primary col-5"
                    type="submit"
                    onClick={this.handleUserLogin}
                    disabled={
                      this.state.Email.length === 0 ||
                      this.state.Password.length === 0
                    }
                  >
                    Login
                  </button>
                  <b>
                    {" "}
                    <hr
                      className="divider col-12"
                      style={{ color: "darkblue" }}
                    ></hr>
                  </b>
                  <Link to="/add-user/_add">
                    {" "}
                    <button className="btn btn-warning col-10" type="submit">
                      Sign up for New User
                    </button>
                  </Link>
                </center>
              </form>
            </div>
          </center>
        </div>
      </div>
    );
  }
}
export default UserLogin;
